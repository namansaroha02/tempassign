import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Status from "../Status/Status";
import Priority from "../Priority/Priority";
import ByNames from "../ByNames/ByNames";
import "./Header.css";

function Header() {
  const [selected, setSelected] = useState('Status');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setIsDropdownOpen(false);
  }

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="main">
      <button
        className={`dropdownButton ${isDropdownOpen ? 'open' : ''}`}
        onClick={handleDropdownClick}
      >
        <FontAwesomeIcon className="HeaderIconFirst" icon={faSliders} /> Display
        <FontAwesomeIcon className="HeaderIconSecond" icon={faAngleDown} />
      </button>
      <div className={`HeaderGrouping ${isDropdownOpen ? 'visible' : ''}`}>
        <p className="firstOption">Grouping</p>
        <select value={selected} onChange={(e) => handleChange(e)}>
          <option>Status</option>
          <option>User</option>
          <option>Priority</option>
        </select>
      </div>
      {selected === 'Status' && <Status />}
      {selected === 'Priority' && <Priority />}
      {selected === 'User' && <ByNames />}
    </div>
  );
}

export default Header;
