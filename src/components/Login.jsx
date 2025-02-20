import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";


const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async () => {
      try {
        const res = await axios.post(BASE_URL + '/login', {
          emailId,
          password,
        }, {withCredentials: true})
        dispatch(addUser(res.data));
        navigate('/');
      }
      catch (error) {
        setError(error?.response?.data);
      }
  }
  return (
  <div className="flex justify-center my-10">   
  <div className="card bg-base-300 w-96 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title text-3xl justify-center">Login</h2>
    <div>
    <label className="form-control w-full max-w-xs my-2">
    <div className="label">
      <span className="label-text">EmailID</span>
    </div>
    <input type="text"
    className="input input-bordered w-full max-w-xs"
    onChange = {(e) => setEmailId(e.target.value)}
    value = { emailId }
    />
    </label>
    <label className="form-control w-full max-w-xs my-2">
    <div className="label">
      <span className="label-text">Password</span>
    </div>
    <input type="text"
    value = { password }
    className="input input-bordered w-full max-w-xs"
    onChange = {(e) => setPassword(e.target.value)}  
    />
    
    </label>
    </div>
    <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center m-2">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login