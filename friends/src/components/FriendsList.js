import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

const FriendsList = props => {
 const [friends,setFriends] = useState([]);

 const [newFriend, setNewFriend] = useState({
  id:friend.id,
  name: friend.name,
  age: friend.age,
  height: friend.height
});


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
             <FriendCard friend={friend} />
             )
      )}
   </div> </>
  );
};

export default FriendsList;
