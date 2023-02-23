import react,{useState} from 'react';

const Form = (props)=>{
    const [firstrName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const creatUser = (e) => {
        e.preventDefault();
        const newUser = {firstrName,lastName,email,password};
        console.log('Welcome',newUser)
    }

    return(
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type='text' onChange={ (e)=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type= 'text' onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                <label>Email:</label>
                <input type = 'text' onChange={ (e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type = 'password' onChange={ (e)=> setPassword(e.target.value)} />
                </div>
                <label>Confirm Password:</label>
                <input type = 'password' onChange={ (e)=> setConfirmPassword(e.target.value)}/><br></br>
                <input type='submit' value='Creat User'/>
                <p>Your Form Data</p>
            </form>
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