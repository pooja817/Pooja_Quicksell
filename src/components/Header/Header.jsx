import { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { icons } from "../../utils/icons";
import "./Header.css";

const Header = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="header">
      <div className="header-container">
        <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
          <img src={icons.display} alt="Display" className="display-icon" />
          <span>Display</span>
          <img
            src={icons.down}
            alt="Toggle"
            className={`arrow-icon ${isOpen ? "rotated" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <div className="menu-item">
              <span className="menu-label">Grouping</span>
              <select
                value={grouping}
                onChange={(e) => onGroupingChange(e.target.value)}
                className="select-input"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="menu-item">
              <span className="menu-label">Ordering</span>
              <select
                value={ordering}
                onChange={(e) => onOrderingChange(e.target.value)}
                className="select-input"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
