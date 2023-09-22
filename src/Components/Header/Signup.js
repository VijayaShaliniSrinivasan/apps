import React from "react";
import './Home.css'
import './signup.css'

function Signup() {

    return(
        <>

             <div className="container">
                <div className="header">
                        <h1>SignUp</h1>
                   <div className="inputs">
                      <input type="text" placeholder="Name"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Email-Id"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Password"></input>
                   </div>
                   <div className="inputs">
                      <input type="text" placeholder="Confirm-Password"></input>
                   </div>
                    <button className="btn">Submit</button>
                </div>
               
             </div>

        
        </>
    )
    
}
export default Signup