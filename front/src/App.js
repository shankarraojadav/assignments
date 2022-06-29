import UserAccount from "./components/UserAccount";
import UserType from "./components/UserType";
import { useState } from "react";


const App = () => {
  const [Account, setAccount] = useState(false);
  const [user, setUser]  = useState()
  return (
    <div>
         
         {Account ? <UserType user={user} setUser={setUser} /> : <UserAccount Account={Account} setAccount={setAccount} user={user} setUser={setUser}/>}
         
    </div>
  )
}


export default App;