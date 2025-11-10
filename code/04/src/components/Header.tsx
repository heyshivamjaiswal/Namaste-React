import { useState } from "react"

export function Header(){
    const[btnNameReact , setBtnNameReact] = useState("Login");
         return(
        <div className='header'> 
            <div className='container'>
               <img 
               className="logo"
               src="https://static.vecteezy.com/system/resources/previews/021/953/308/large_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
               />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li> 
                    <li>Conatact Us</li>
                    <li>Cart</li>
                    <button className="login-b"
                    onClick={()=>{
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout")
                       : setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
 