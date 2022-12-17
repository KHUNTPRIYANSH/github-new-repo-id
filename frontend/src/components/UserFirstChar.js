import React from 'react'

function UserFirstChar(props) {
    const firstChar=(e)=>{
        return e.charAt(0);
    }
    let {email}=props;
  return (
    <div className='usr-n'>
      {firstChar(email)}
    </div>
  )
}
UserFirstChar.defaultProps={
    email: "User@gmail.com"
}
export default UserFirstChar
