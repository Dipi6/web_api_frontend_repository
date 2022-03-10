import { useState } from "react";
import axios from "axios";
import { parseJwt } from "../Auth/config";


const Login = ()=>{
    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const userLogin=(e)=>{
        e.preventDefault();
        const userData = {
            username, password
        }
        axios.post("http://localhost:90/login", userData)
        .then(result=>{
            console.log(result);
            if(result.data.token){
                /// success 
                localStorage.setItem('t', result.data.token );
                const token = localStorage.getItem('t');

                const parsedToken = parseJwt(token)
                
                window.location.href = '/'   ;            
            }
            else{
                // invalid
                setMessage("Invalid Login Please try again!!");

            }
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return(
        <div className="container">
            <div className="row">

                <div className="col-md-3">
            <h2> Login</h2>
            <p>{message}</p>

            <form>
                <div className="form-group">
                    <label>
                        Username
                    </label>
                    <input type="text" className="form-control"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>
                        Password
                    </label>
                    <input type="password" className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

    

                <div className="form-group mt-2">
                    
                    <input type="submit" className="btn btn-dark" style={{background: "#065157"}}
                    onClick={userLogin}
                    />
                </div>
                
            </form>
            </div>
            </div>
        </div>
    )
}

export default Login;