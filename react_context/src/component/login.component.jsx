import { useState, useContext } from "react";
import { UserContext } from "../context/user.context";

const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setpPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handlesubmit = (e) => {
        e.prevantDefault
        setUser({username, password})
    }
    
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text" 
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
            <input 
                type="text" 
                placeholder="password"
                onChange={(e) => setpPassword(e.target.value)}
            
            />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login;