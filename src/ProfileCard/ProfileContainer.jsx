import React, { useState } from "react";
import "./ProfileContainer.css";

function ProfileContainer({ user, handleDelete }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleEdit = (e) => {
    if (userData.age > 18)
      setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile ">
      <div className="top flexUtil">
        <div className="user flexUtil">
          <div className="userImage">
            <img src={user.picture} alt="" />
          </div>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleEdit}
            />
          ) : (
            <h2>{userData.name}</h2>
          )}
        </div>
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <i class="fa-solid fa-caret-up" style={{ color: "#8c8c8c" }}></i>
          ) : (
            <i class="fa-solid fa-caret-down" style={{ color: "#8f8f8f" }}></i>
          )}
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="detail">
            <div className="age">
              <p className="label">Age</p>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleEdit}
                />
              ) : (
                <h3>{userData.age} Years</h3>
              )}
            </div>
            <div className="gender">
              <p className="label">Gender</p>
              {isEditing ? (
                <select name="gender" onChange={handleEdit}>
                  <option value="">Rather not to say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              ) : (
                <h3>{userData.gender}</h3>
              )}
            </div>
            <div className="country">
              <p className="label">Country</p>
              {isEditing ? (
                <input
                  type="text"
                  name="country"
                  value={userData.country}
                  onChange={handleEdit}
                />
              ) : (
                <h3>{userData.country}</h3>
              )}
            </div>
          </div>
          <div className="description">
            <p className="label">Description</p>
            {isEditing ? (
              <textarea
                value={userData.description}
                name="description"
                onChange={handleEdit}
              />
            ) : (
              <h3>{userData.description}</h3>
            )}
          </div>

          <div className="buttonContainer">
            {isEditing ? (
              <button onClick={() => setEditing(false)}>
                <i
                  class="fa-regular fa-circle-xmark"
                  style={{ color: "#cd3232" }}
                ></i>
              </button>
            ) : (
              <button onClick={() => handleDelete(user.id)}>
                <i class="fa-solid fa-trash" style={{ color: "#d92626" }}></i>
              </button>
            )}
            {isEditing ? (
              <button onClick={() => setEditing(false)}>
                <i
                  class="fa-regular fa-circle-check"
                  style={{ color: "#3ec224" }}
                ></i>
              </button>
            ) : (
              <button onClick={() => setEditing(true)}>
                <i class="fa-solid fa-pen" style={{ color: "#4986ee" }}></i>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileContainer;
