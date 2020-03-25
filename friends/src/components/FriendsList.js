import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
const FriendsList = props => {
 const [friends,setFriends] = useState([]);

 useEffect(() => {
    getFriends();
  }, []);


const getFriends = () => {

    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log(res);
      setFriends(res.data)
    });

}

const addFriend = (newFriend) => {

    axiosWithAuth()
    .post('/api/friends', newFriend)
    .then(res => {
      console.log(res);
      setFriends(res.data)

    });


}


  return (
    <>
    <FriendForm addFriend={addFriend} />
    <div className="friends">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        friends.map(friend =>
             <div key={friend.id} className="friend" >
                 <p>{friend.name}</p>
                 <p>{friend.age}</p>
                 <p>{friend.email}</p>
             </div>
             )
      )}
   </div> </>
  );
};

export default FriendsList;
