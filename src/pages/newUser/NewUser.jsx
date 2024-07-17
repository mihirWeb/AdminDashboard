import { useState } from "react";
import "./newUser.css";
import { createUser } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewUser() {
  const [ details, setDetails] = useState({});
  const dispatch = useDispatch();

  const handleDetailChange = (e) => {
    setDetails((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick =() =>{
    createUser(dispatch, details);
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"
            name="username"
            onChange={(e) => handleDetailChange(e)}
           />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" 
            name="fullName"
            onChange={(e) => handleDetailChange(e)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"
           name="email"
           onChange={(e) => handleDetailChange(e)}
           />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" 
            name="password"
            onChange={(e) => handleDetailChange(e)}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" 
            name="phone"
            onChange={(e) => handleDetailChange(e)}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" 
            name="address"
            onChange={(e) => handleDetailChange(e)}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
