import React from "react";
import User from "./User/User";

const UserList = props =>
  props.users.map(({ avatar, username, fullname }, index) => (
    <User key={index} avatar={avatar} username={username} fullname={fullname} />
  ));

export default UserList;