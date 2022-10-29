import React, {memo} from 'react'

function Header ({increment}) {
console.log("Header component re-render")


    return (
        <div>
            Header
            <div><button onClick ={increment}> Arttır</button></div>
        </div>
    )
}

export default memo(Header);