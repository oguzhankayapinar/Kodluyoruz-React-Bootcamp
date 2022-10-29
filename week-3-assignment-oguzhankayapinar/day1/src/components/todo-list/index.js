import React, { useState, useEffect } from "react";
import Button from "../button";
import classes from "./style.module.css";

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState();
	const [itemSize, setItemSize] = useState(15);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((todos) => {
				setTodos(todos);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Id  sorting işlemleri
	let idSorting = () => {
		if (selectedTodo !== "id") {
			setTodos([...todos].reverse());
		} else {
			setTodos([...todos].sort((a, b) => a.id - b.id));
		}
	};
	let tittleSorting = () => {
		if (selectedTodo !== "id") {
			setTodos([...todos].reverse());
		} else {
			setTodos([...todos].sort((a, b) => a.id - b.id));
		}
	};
	const editTodo = (id, value) => {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.title = value;
		setTodos(newTodos);
	};

	// Durum  sorting işlemleri
	let completedSorting = () => {
		if (todos[0].completed) {
			setTodos([...todos].sort((a, b) => a.completed - b.completed));
		} else {
			setTodos([...todos].sort((a, b) => b.completed - a.completed));
		}
	};

	// Pagination Bölümü
	const pages = [];
	const start = currentPage * itemSize;
	const end = start - itemSize;
	const currentTodo = todos.slice(end, start);

	const renderPagination = () => {
		let total = todos.length;

		const paginate = (pages) => setCurrentPage(pages);
		for (let i = 1; i <= Math.ceil(total / itemSize); i++) {
			pages.push(i);
		}

		return (
			<nav>
				<ul className="pagination">
					{pages.map((num) => (
						<li key={num} className="page-item">
							<a onClick={() => paginate(num)} href="#" className="page-link">
								{num}
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	};

	const renderThead = () => {
		return (
			<thead>
				<tr>
					<th scope="col" onClick={idSorting} id="title-sorting">
						{" "}
						Kullanıcı Id<button class="btnd">&dArr;</button>{" "}
						<button class="btna">&dArr;</button>
					</th>
					<th scope="col" onClick={tittleSorting} id="userid-sorting">
						Başlık <button class="btnd">&dArr;</button>{" "}
						<button class="btna">&dArr;</button>
					</th>
					<th scope="col" onClick={completedSorting} id="status-sorting">
						Durum <button class="btnd">&dArr;</button>{" "}
						<button class="btna">&dArr;</button>
					</th>
					<th>Aksiyon</th>
				</tr>
			</thead>
		);
	};

	const remove = (todo) => {
		if (window.confirm("Silmek üzerisiniz emin misiniz")) {
			setTodos((prev) => {
				return prev.filter((x) => x.id != todo.id);
			});
		}
	};

	const edit = (todo) => {
		setSelectedTodo(todo);
	};

	const renderBody = () => {
		return (
			<tbody>
				{currentTodo.slice(0, 15).map((todo, index) => {
					return (
						<tr key={index}>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
							<td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
							<td>
								<Button
									className={`btn btn-sm btn-danger ${classes.actionButton} `}
									onClick={() => remove(todo)}
								>
									Sil
								</Button>
								<Button
									onClick={() => edit(todo)}
									className="btn btn-sm btn-warning"
								>
									Düzenle
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		);
	};

	const renderEditForm = () => {
		return (
			<div>
				<input
					// Seçili todonun değerini değiştirmek için onChange metodunu kullanıldı.
					type="text"
					onChange={(e) => editTodo(selectedTodo.id, e.target.value)}
				/>
				<input
					className="form-check-input mt-0"
					type="checkbox"
					value=""
					aria-label="Checkbox for following text input"
				/>
				<Button>Kaydet</Button>
				<Button onClick={() => setSelectedTodo(undefined)}>Vazgeç</Button>
			</div>
		);
	};
	return (
		<div className={`${classes.container} container`}>
			{selectedTodo && renderEditForm()}
			<div  style={{ borderStyle: 'solid', borderColor: '#d5d5d5', borderWidth: 1,  }}>
				{renderPagination()} </div>
			<table className="table">
				{renderThead()}
				{renderBody()}
			</table>

		</div>
	);
};

export default TodoList;
