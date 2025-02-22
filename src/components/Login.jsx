import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";


const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState('');
  const [about, setAbout] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');

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
        setError(error?.response?.data || 'Something went wrong');
      }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BASE_URL + '/signup',
        {firstName,
         lastName,
         emailId,
         password,
         gender,
         age,
         skills,
         about,
         profilePicUrl,
        },
        {withCredentials: true}
      )
      console.log("SIgnup", res);
      dispatch(addUser(res.data));
      navigate('/profile');
    }
    catch (err) {
      console.log(err);
      setError(error?.response?.data || 'Something went wrong');
    }
  }

  const renderLoginFormCard = () => {
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
    <p onClick = {() => setLoginForm(value => !value)} className="text-bold cursor-pointer text-center py-2" >{"Existing User? Login Here"}</p>
  </div>
</div>
</div>
    )
  }

  const renderSignUpFormCard = () => {
    return (
      <div className="hero bg-base-100 min-h-screen my-10">
  <div className="bg-base-300 hero-content flex-col p-10">
    <div className="text-center lg:text-left">
      <h1 className="card-title text-3xl justify-center">SignUp</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">FirstName</span>
          </label>
          <input value = {firstName} onChange = {(e) => setFirstName(e.target.value)} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LastName</span>
          </label>
          <input value = {lastName} onChange = {(e) => setLastName(e.target.value)} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">EmailID</span>
          </label>
          <input value = {emailId} onChange = {(e) => setEmailId(e.target.value)} type="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password"  className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <input value = {gender} onChange = {(e) => setGender(e.target.value)} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input value = {age} onChange = {(e) => setAge(e.target.value)} type="number" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Skills</span>
          </label>
          <input value = {skills} onChange = {(e) => setSkills([e.target.value])} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">About</span>
          </label>
          <input value = {about} onChange = {(e) => setAbout(e.target.value)} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Pic</span>
          </label>
          <input value = {profilePicUrl} onChange = {(e) => setProfilePicUrl(e.target.value)} type="text" className="input input-bordered"  />
        </div>
        <div className="form-control text-center mt-6">
          <button className="btn btn-primary" onClick={handleSignUp}>SignUp</button>
        </div>
        <p onClick = {() => setLoginForm(value => !value)} className="text-bold cursor-pointer text-center py-2" > {'New user? Signup Here'}</p>
      </form>
    </div>
  </div>
</div>
    )
  }
  const renderToggle = () => {
    const renderForm = isLoginForm ? renderLoginFormCard() : renderSignUpFormCard();
    return renderForm;
  }
  return (
    <> 
    {renderToggle()}
    </>
  )
}

export default Login