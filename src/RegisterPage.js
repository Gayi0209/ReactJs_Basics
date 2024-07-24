import {useState} from "react";
function RegisterPage(){
    const [collegeIdValue,setCollegeId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [emailValue,setEmail] = useState('');
    const [branchValue,setBranch] = useState('');
    const [year,setyear] = useState('');
    const [gender,setGender] = useState('');
    const [user,setUser] = useState({});

    const getCollegeId = (event) =>{
        setCollegeId(event.target.value);
        console.log(collegeIdValue);
    }
    const getPassword = (event) =>{ 
        setPassword(event.target.value);
        console.log(passwordValue);
    }
    const getEmail = (event) =>{
        setEmail(event.target.value);
        console.log(emailValue);
    }  
    const getBranch = (event) =>{
        setBranch(event.target.value);
        console.log(branchValue);
    }
    
    const getYear = (event) =>{
        setyear(event.target.value);
        console.log(year);
    }
    
    const getGender = (event) =>{
        setGender(event.target.value);
        console.log(gender);
    }
    const formSubmitted = (event) =>{
        event.preventDefault();
        const obj = {collegeIdValue,passwordValue,emailValue,branchValue,year,gender};
            console.log(obj);
            setUser(obj);
            console.log(user);
    }
    return(
    
            <div className="card" style={{width: '500px', marginLeft: '500px',marginTop :'20px'}}>
            <div className="card-body">
                <h2>Register</h2>
                <p>Provide your details to Register</p>
                <form onSubmit = {formSubmitted} style = {{display: 'flex', flexDirection: 'column'}}>
                    <h6>College Id </h6>
                    <input type = "text" onChange = {getCollegeId} placeholder="College id"/><br></br>
                    <h6>Password</h6>
                    <input type = "currentpassword" onChange = {getPassword} placeholder="Password"/><br></br>
                    <h6>Email address</h6>
                    <input type = "email" onChange = {getEmail} placeholder="Email address"/><br></br>
                    <h6>Branch</h6>
                    <select className="form-select" value = {branchValue} onChange = {getBranch}>
                        <option value=" ">Select a branch</option>
                        <option value="AIML">AIML</option>
                        <option value="CSE">CSE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="Cyber">Cyber</option>
                        <option value="IT">IT</option>
                    </select><br></br>
                    <h6>Year</h6>
                    <select className="form-select" value={year} onChange={getYear}>
                        <option value=" "> Select a year</option>
                        <option value="1st year">1st year</option>
                        <option value="2nd year">2nd year</option>
                        <option value="3rd year">3rd year</option>
                        <option value="4th year">4th year</option>
                    </select><br></br>
                    <h6>Gender</h6>
                        <div>
                            <input type = "radio" name = "gender" value= "Male" onChange={getGender}/>Male&nbsp;&nbsp;
                            <input type = "radio" name = "gender" value = "Female" onChange={getGender}/>Female&nbsp;&nbsp;
                            <input type = "radio" name = "gender" value= "Other" onChange={getGender}/> Other&nbsp;&nbsp;
                        </div>
                        <button type = "submit" className="btn btn-dark" style={{width: '100px', marginLeft: '350px'}}>Register</button>
                    </form>
                </div>
            </div>
        
    )
}
export default RegisterPage;