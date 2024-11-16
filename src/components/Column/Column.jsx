import { getStatusIcon } from "../../utils/icons";
import { icons } from "../../utils/icons";
import UserAvatar from "../UserAvatar/UserAvatar";
import Card from "../Card/Card";
import "./Column.css";

const Column = ({ title, tickets, users, count, groupBy, icon }) => {
  const columnUser = users?.find((user) => user.name === title);

  const getColumnIcon = () => {
    if (groupBy === "user" && columnUser) {
      return <UserAvatar user={columnUser} size="large" />;
    } else if (groupBy === "priority" && icon) {
      return <img src={icon} alt={title} className="priority-icon" />;
    } else {
      return (
        <img src={getStatusIcon(title)} alt={title} className="status-icon" />
      );
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-info">
          {getColumnIcon()}
          <span className="column-title">{title}</span>
          <span className="ticket-count">{count}</span>
        </div>
        <div className="column-actions">
          <button className="action-button">
            <img src={icons.add} alt="Add" />
          </button>
          <button className="action-button">
            <img src={icons.menu} alt="Menu" />
          </button>
        </div>
      </div>

      <div className="column-content">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users?.find((u) => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
