import { useState } from "react"
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [profilePicUrl, setProfilePicUrl] = useState(user.profilePicUrl);
    const dispatch = useDispatch();
    const saveProfile = async () => {
        try {
            const res = await axios.put(
                BASE_URL + "/profile/edit",
                { firstName, lastName, age, gender, about, profilePicUrl },
                {
                    withCredentials: true,

                }
            );
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleSaveProfile = () => {
        saveProfile();
    }


  return (
    <>  
    <div className="flex justify-center my-10">  
    <div className="flex justify-center mx-10">   
    <div className="card bg-base-300 w-96 shadow-xl ">
    <div className="card-body">
      <h2 className="card-title text-3xl justify-center">Edit Profile</h2>
      <div>
      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">firstName</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {firstName}
      onChange = {(e) => setFirstName(e.target.value)}  
      />
      </label>

      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">lastName</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {lastName}
      onChange = {(e) => setLastName(e.target.value)} 
      />
      </label>

      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">age</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {age}
      onChange = {(e) => setAge(e.target.value)} 
      />
    </label>

      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">Gender</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {gender}
      onChange = {(e) => setGender(e.target.value)} 
      />
      </label>
      
      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">About</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {about}
      onChange = {(e) => setAbout(e.target.value)} 
      />
      </label>

      <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">profilePicUrl</span>
      </div>
      <input type="text"
      className="input input-bordered w-full max-w-xs"
      value = {profilePicUrl}
      onChange = {(e) => setProfilePicUrl(e.target.value)} 
      />
      </label>

      </div>
      <div className="card-actions justify-center m-2">
        <button className="btn btn-primary" onClick = {handleSaveProfile}>Edit Profile</button>
      </div>
    </div>
  </div>
    </div>
    <UserCard user = {{firstName, lastName, age, gender, about, profilePicUrl}}/>
    </div>
    </>
  )
}

export default EditProfile