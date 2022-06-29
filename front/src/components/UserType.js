
import './usertype.css';


const UserType = ({user}) => {
    return (
        <div className='user'>
              <h1>Hi <spna style={{color:"blue"}}>{user}</spna></h1>
        </div>
    )
}


export default UserType;