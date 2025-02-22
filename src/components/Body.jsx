import { Outlet, useNavigate } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);
    const fetchUser = async () => {
         
        // If User data is present then don't make an API call
        if (userData) return;
        try {
            const user = await axios.get(BASE_URL + '/profile/view', {withCredentials: true});
            
            dispatch(addUser(user.data));
            
        }
        catch (err) {
            if (err.status === 401) {
                navigate('/login');
            }
            console.log(err);
        }

    }

    useEffect(() => {
        fetchUser();
    }, [])

  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Body