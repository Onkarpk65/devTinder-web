import axios from "axios";
import { BASE_URL } from '../utils/constants';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from '../utils/connectionSlice';

const Connections =  () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch()
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/connections',
        {withCredentials: true}
      );
      console.log(res.data.data);
      dispatch(addConnections(res.data?.data));
    }
    catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, [])

 if (!connections) return; 

 if (connections.length === 0) return <h1>No Connections found</h1>

  return (
    <div className="justify-center my-10 p-5">
      <h1 className="text-bold text-3xl">Connections</h1>
      {
        connections.map((eachConnection) => {
          const {firstName, lastName, age, gender, about, profilePicUrl} = eachConnection
          return (
            <div className="flex  m-4 p-4  rounded-lg bg-base-300 max-w-1/2 mx-auto">
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

export default Connections