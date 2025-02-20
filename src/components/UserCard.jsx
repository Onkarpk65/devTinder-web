

const UserCard = ( {user} ) => {
    const {firstName, lastName, age, gender, about, profilePicUrl} = user;
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
  <figure>
    <img
      src= {profilePicUrl}
      alt="user photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    <p>{age + " " + gender}</p>
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
    <button className="btn btn-primary">Ignore</button>
    <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard