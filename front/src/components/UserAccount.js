import { useState } from "react";
import { loginAuth, signupAuth } from "../service/api";
import './useraccount.css';



const UserAccount = ({Account, setAccount, user, setUser}) => {
    const [togglelogin, setToggleLogin] = useState(true);
    const [login, setLogin] = useState({});
    const [signup, setSignup] = useState({});
    
   

  

    const onLoginValue = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    };

    console.log(login)
    const onSignupValue = (e) => {
           setSignup({...signup, [e.target.name]: e.target.value})
    };

    console.log(signup)
   
    const LoginUser =async () => {
        const response = await loginAuth(login)
      console.log(response.data.role)
      if(response.status == 200) {
           setAccount(true);
           setUser(response.data.role)
           
      }
    };

    const SignupUser =async () => {
      const response = await signupAuth(signup);
      console.log(response)
    }
    return (
        <div className="account">
        { togglelogin ?
          <div className="login">
             <h1 style={{fontFamily:"cursive", color:"#fb641b"}}>Login</h1>
          
          <input className='inp_box' type="text" placeholder="username" name="username" onChange={ onLoginValue} required/>
          <input className='inp_box' type="password" placeholder="password" name="password" onChange={ onLoginValue} required/>
          <button variant="contained"  style={{width:"100px", alignSelf:"center"}} onClick={LoginUser}>Login</button>
          <button onClick={() => setToggleLogin(false)} className='newAccount' variant="contained">New here? SignUp</button>
       </div> :
      <div className="signup">
         <h1 style={{fontFamily:"cursive", color:"#fb641b"}}>Register</h1>
   
          <input className='inp_box' required type="text" placeholder="username" name="username" onChange={onSignupValue} />
          <input className='inp_box' type="password" placeholder="password" name="password" onChange={onSignupValue}/>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          <label for='role'>Role:</label>
          <select onChange={onSignupValue} name="role">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          </div>
          <button variant="contained" style={{width:"100px", alignSelf:"center", marginTop: "20PX"}} onClick={SignupUser}>Signup</button>
          <button onClick={() => setToggleLogin(true)} className='newAccount' variant="contained">Already Have Account</button>
      </div>
        }
     </div>
    )
}

export default UserAccount;