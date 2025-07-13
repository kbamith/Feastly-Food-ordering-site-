const User=({name,Location})=>{
return(
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h2>Loaction:{Location}</h2>
      <h2>LinkedIn url</h2>
    </div>
)
}
export default User;