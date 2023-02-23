import react,{useState} from 'react';

const Form = (props)=>{
    const [firstrName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [lastNameError,setLastNameError] = useState("")
    const [emailError,setEmailError] = useState("")
    const [firstNameError,setFirstNameError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [confirmPasswordError,setConfirmPasswordError] = useState("")

    const creatUser = (e) => {
        e.preventDefault();
        const newUser = {firstrName,lastName,email,password};
        console.log('Welcome',newUser)
    }
    const handelValidationName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("Name must be at least 2 characters");
        }else{
            setFirstNameError("");
        }
    }
    const handelValidationLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters");
        }else{
            setLastNameError("");
        }
    }
    const handelValidationEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }else{
            setEmailError("");
        }
    }
    const handelValidationPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }else{
            setPasswordError("");
        }
    }
    const handelValidationConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmPasswordError("Passwords do not match");
        }else{
            setConfirmPasswordError("");
        }
    }
    return(
        <div>
            <form onSubmit={creatUser}>
                <div>
                    <label>First Name:</label>
                    <input type='text' onChange={handelValidationName}/>
                </div>
                <p>{firstNameError}</p>
                <div>
                    <label>Last Name:</label>
                    <input type= 'text' onChange={ handelValidationLastName}/>
                    <p>{lastNameError}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <input type = 'text' onChange={handelValidationEmail}/>
                    <p>{emailError}</p>
                    {email && (email.length < 5) ? <p>Email mut be at least 5 characters</p> : null }
                </div>
                <div>
                    <label>Password:</label>
                    <input type = 'password' onChange={ handelValidationPassword} />
                    <p>{passwordError}</p>
                </div>
                <label>Confirm Password:</label>
                <input type = 'password' onChange={ handelValidationConfirmPassword}/>
                <p>{confirmPasswordError}</p>
                {confirmPassword &&(confirmPassword!== password) ? <p>Passwords must match</p> : null}<br></br>
                <input type='submit' value='Creat User'/>
                <p>Your Form Data</p>
            </form>
            {/* (condition) ? True : False        `show my ${variable}` */}
            <table> 
                <tr>
                    <td>First Name:</td>
                    <td>{firstrName}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>{confirmPassword}</td>
                </tr>
            </table>
        </div>
    )
}
export default Form