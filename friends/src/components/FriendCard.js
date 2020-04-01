import React from "react";


const FriendCard = ({friend}) => {


  return (
    <>
    <div key={friend.id} className="friend" >
    <p>{friend.name}poo</p>
    <p>{friend.age}</p>
    <p>{friend.email}</p>
    </div> 
</>
  );
};

export default FriendCard;
