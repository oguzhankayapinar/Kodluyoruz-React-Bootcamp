import React, {useState, useMemo, useCallback}  from 'react'
import Header from './Header';
import User from './User'

// const userData={
//     id:1,
//     name:"Oğuzhan"
// };

// userData'yı burada tanımlarsak ve user componentinde de react memoyu kullanırsak yeniden render edilmez 

function Counter() {

    // StateFull Component:
    const [count, setCount] = useState(0);
    const [name,setName]= useState("Oguzhan")

    console.log("Counter component re-render");

    // const userData = useMemo(()=> {
    //     return {
    //         id: 1,
    //         name,
    //     }
    // },[name]);
    
    // Sayıyı artırma işlemi yaptığımız zaman sadece counter işlemi render ediliyor. İsim değişikliği butonuna (güncellersek) basarsak eğer o zaman hem counter hem user componenti çalışmaya başlamaktadır.

    const increment = useCallback (()=> {
          setCount ((prev)=>prev+1);
    },[])

    return (
        <div>
            <Header increment={increment} />
            {/* <User data={userData} /> */}
            <hr />
            <h2> {count} </h2>
            <button onClick={increment}>Arttır </button>
            <hr/>
            <button onClick={()=>setName (name ==="Oguzhan" ? "Kayapınar" : "Oguzhan")}>İsmi Değiştir</button>
        </div>
    )
}

export default Counter