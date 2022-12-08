import React from 'react'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  return (
<Container>
<div className="user_profile_icon">
<i class="bx bx-user-circle user_offcanvas"></i>
</div>
<div className="user_profile_info">
    <lable>Name</lable>
    <lable>user</lable>
    <label>gender</label>
</div>
</Container>
  )
}

export default UserProfile