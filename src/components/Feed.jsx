import axios from "axios"
import { BASE_URL } from "../utils/constants"


const Feed = () => {
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + '/feed',
        {withCredentials: true}
      )
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>Feed</div>
  )
}

export default Feed