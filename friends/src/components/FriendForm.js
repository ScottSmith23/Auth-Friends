import React, { useState } from "react";

const FriendForm = props => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
      });


  const handlePostData = e => {
    e.preventDefault();
    props.addFriend(friend);
    setFriend({ name: "", age: "",email: "" });
  };

  const handleChanges = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
    console.log(friend);
  };

  return (
    <>
    <form className="inputForm" onSubmit={handlePostData}>
      <label htmlFor="name">Friend Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={friend.name}
      />
      <label htmlFor="age">age:</label>
      <input
        id="age"
        name="age"
        onChange={handleChanges}
        value={friend.age}
      />
      <label htmlFor="email">email:</label>
      <input
        id="email"
        name="email"
        onChange={handleChanges}
        value={friend.email}
      />
      <button className="buttonGet" type="submit">Add Friend</button>
    </form>
    </>
  );
};


export default FriendForm
