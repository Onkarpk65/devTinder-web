import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";


const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/logout', {},
        {withCredentials: true},
      )
      dispatch(removeUser());
      navigate('/login');
    }
    catch (err) {
      //Error Logic redirect to error page
      console.log(err);
    }
  }
  return (
    <>
<div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to = '/' className="btn btn-ghost text-xl">👩‍💻DevTinder </Link>
  </div>
  { user && (
    <div className="flex-none gap-2 flex item-center">
    <p className="py-2">Welcome, {user.firstName}</p>
   
    <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
        <div className="w-10 rounded-full">
          <img
            alt="user profile pic"
            src= {user.profilePicUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to = '/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to = '/connections'>Connections</Link></li>
        <li><Link to = '/requests'>Received Requests</Link></li>
        <li><a onClick = {handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
  )}
</div>
    </>
  )
}

export default NavBar