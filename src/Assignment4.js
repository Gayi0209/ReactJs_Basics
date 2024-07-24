import { useState } from "react";

import RegisterPage from "./RegisterPage";
import Loginpage from "./LoginPage";
function Assingment4(){
    const [isLogin,setState] = useState(true);
    const showLogin = () => {
        setState(true);
    }
    const showRegister = () => {
        setState(false);
    }
    return(
        <div className="card">
            <div className="card-body mx-auto">
                <button className="btn btn-dark" onClick={showLogin}>Login</button>&nbsp;&nbsp;
                <button className="btn btn-dark" onClick={showRegister}>Register</button>
            </div>
            {
                isLogin ? <Loginpage/> :  <RegisterPage/>
            }   
            
        </div>
        
    );
}
export default Assingment4