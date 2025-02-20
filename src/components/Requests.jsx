import axios from "axios"
import { BASE_URL } from '../utils/constants';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests)
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/requests/received',
        {withCredentials: true},
      )
      console.log(res.data?.data);
      dispatch(addRequests(res.data?.data))
    }
    catch (err) {
      console.log(err.message);
     
    }
  }

  useEffect(() => {
    fetchRequest();
  }, [])

  //If requests are empty return from here
  if (!requests) return; 

  //If requests length is 0 then return this,
  if (requests.length === 0) return <h1>No Requests found</h1>
  
  //Else
   return (
     <div className="justify-center my-10 p-5">
       <h1 className="text-bold text-3xl">Your Recevied Requests</h1>
       {
         requests.map((eachConnection) => {
           const {_id, firstName, lastName, age, gender, about, profilePicUrl} = eachConnection
           return (
             <div key = {_id} className="flex  m-4 p-4  rounded-lg bg-base-300 max-w-1/2 mx-auto">
               <div>  
                <img className="w-20 h-20 rounded-full" alt = 'photo' src = {profilePicUrl} />
                </div>
                <div className="text-left mx-4">
                <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                <p>{age + ", " + gender}</p>
                <p>{about}</p>
                </div>
             </div>
           )
         })
       }
     </div>
   )
}

export default Requests