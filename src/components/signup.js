import { useState } from "react";
import axios from "axios";

const Register=()=>{
    const [fullName, setFullName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const helloReg=(e)=>{
        e.preventDefault(); // stops the default behaviour ie refresh
        const userData = {
            fullName, email, phone, username, password 
        }
        axios.post("http://localhost:90/register", userData)
        .then(result=>{
            if(result.data.message){
                // registered success
                console.log(result.data);
                setMessage(result.data.message)
            }
            else{
                // not registered
                setMessage('Something went wrong! Please try again!');
            }
        })
        .catch(e=>{
            setMessage('Something went wrong! Please try again!');
        })
    }
    return(
        <div className="container">
        
            <div className="row">
                <div className="col-md-4">
                    <h2>Register Here.</h2>
                    <p>{message}</p>
                    <form>
                        <div className="form-group">
                            <label>fullName</label>
                            <input type="text" className="form-control"
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>email</label>
                            <input type="email" className="form-control"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>phone</label>
                            <input type="text" className="form-control"
                            value={phone}
                            onChange={(e)=>setphone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>username</label>
                            <input type="text" className="form-control"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>password</label>
                            <input type="password" className="form-control"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-2" style={{background : "#065157"}} onClick={helloReg}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;