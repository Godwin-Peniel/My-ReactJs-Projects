import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProfile
        name="Godwin Peniel"
        email="godwinpeniel@gmail.com"
        bio="React Developer @ Tech Co."
      ></UserProfile>
    </div>
  );
}

export default App;

function UserProfile({ name, email, bio }) {
  return (
    <div className="user-profile">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
