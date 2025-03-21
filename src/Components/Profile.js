import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import "./Styling.css";
import { useLocation } from "react-router-dom";


const Profile = () => {

  const { state } = useLocation();

  return (
    <div className='screen'>

    <h4 className='p-3' style={{backgroundColor: "white"}}>Account Settings</h4>
    <div className="container">
<div className="d-flex mt-4 mb-4">
    <Col xs={6} md={4}>
    <div className="position-relative">
          <Image src="Ellipse.png" roundedCircle />
          <Image className='logo' src="Group.png" roundedCircle />
    </div>
        </Col>
        <div className="">
          <h5 className='profName'>{state? state.name: "Marry Doe" }</h5>
          <p>{state? state.email: "Marry@Gmail.com"}</p>
        </div>
</div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti maiores sit quos voluptate itaque.</p>
    </div>
    </div>
  )
}

export default Profile