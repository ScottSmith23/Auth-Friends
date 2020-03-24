import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsList = props => {
 const [friends,setFriends] = useState([]);

 useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data)
      });
  }, []);





  return (
    <><div className="friends">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        friends.map(friend =>
             <p>pooping</p>
             )
      )}
   </div> </>
  );
};

export default FriendsList;
