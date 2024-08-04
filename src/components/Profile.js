import React from "react";
import "../styling/profile.css";
import Footer from "./Footer";

function Profile() {
  return (
    <>
      {/* <!-- component --> */}
      <body className="bg-gray-100">
        <div className="max-w-lg mx-auto xs:my-0 my-10  bg-white rounded-lg shadow-md p-5">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://picsum.photos/200"
            alt="Profile-picture"
          />
          <h2 className="text-center text-2xl font-semibold mt-3">Username</h2>
          <p className="text-center text-gray-600 mt-1">Premium Member</p>
          <div className="mt-5">
            <button className="edit-btn ">Edit</button>
            <div className="Userinfo">
              <br/>
              <h1>Name</h1>
              <p>Shashank Gavale</p>
              <br />
              <h1>Email</h1>
              <p>Shashankmgavale@gmail.com</p>
              <br />
              <h1>Password</h1>
              <p>*********</p>
              <br />

              <h1>Phone No</h1>
              <p>98*******8</p>
              <br />

              <h1>Date Of Birth</h1>
              <p>12-08-2004</p>
              <br />

              <h1>Address</h1>
              <p>Pune</p>
            </div>
          </div>
        </div>
      </body>
    <div className="logout">
      <button >Logout</button>
      </div>

      <Footer/>
    </>
  );
}

export default Profile;
