import React, { Component } from "react";
import PropTypes from "prop-types";

const UsersListItem = (props) => (
  <li>
    <div>{props.userData.average}</div>
    <div>
      <p>{props.userData.name}</p>
      <p>{props.userData.attendance}</p>
    </div>
    <button>button</button>
  </li>
);

export default UsersListItem;




