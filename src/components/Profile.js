import React from "react";


function Profile(props){
    console.log(props)
    return (
    <h1>
         Name: {props.name} {props.lastname}
    </h1>
    );
    
}

// const Profile = () => {
//   return (
//     <div className="profile">
//       <h1> Name: Irungu </h1>
//     </div>
//   );
//};

export default Profile;
