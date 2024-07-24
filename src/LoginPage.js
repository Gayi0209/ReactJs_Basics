import {useEffect, useRef,useState} from "react";
const id = "22B01A4275";
const password = "gai@0209";
function Loginpage(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [message,setMessage] = useState('');

    useEffect(() => {
        firstRef.current.focus();
    })
    const formSubmitted = (event) =>{
        event.preventDefault();
        if(firstRef.current.value === id && secondRef.current.value === password){
            console.log("Login Successful");
            setMessage("Login Successful");
        }
        else{
            console.log("Login Failed");
            setMessage("Login Failed");
        }
        firstRef.current.value = "";
        secondRef.current.value = "";
    }
    return(
        <div className="card" style={{width: '500px', marginLeft: '500px',marginTop :'20px'}}>
            <h2>Login</h2>
            <p>Provide your login credentials</p>
            <form onSubmit={formSubmitted} className="card-body" style = {{display : 'flex', flexDirection : 'column'}}>
                <h6>College Id</h6>
                <input type = "text" placeholder="Enter your college id" ref = {firstRef}/>
                <br></br>
                <h6>Password</h6>
                <input type = "text" placeholder="Enter your password" ref = {secondRef}/><br></br>
                <button type = "submit" className="btn btn-dark" style={{marginLeft : '350px'}}>Submit</button>
                <p>{message}</p>
            </form>
        </div>
    )
}
export default Loginpage
