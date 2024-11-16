import { getPriorityIcon } from "../../utils/icons";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Card.css";

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <UserAvatar user={user} size="small" />
      </div>

      <div className="card-title">
        <img
          src={getPriorityIcon(ticket.priority)}
          alt="Priority"
          className="priority-icon"
        />
        <p className="title-text">{ticket.title}</p>
      </div>

      <div className="card-footer">
        {ticket.tag.map((tag, index) => (
          <div key={index} className="tag">
            <span className="tag-dot" />
            <span className="tag-text">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
