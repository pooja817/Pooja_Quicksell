import "./UserAvatar.css";

const UserAvatar = ({ user, size = "medium" }) => {
  if (!user) return null;

  return (
    <div className="user-avatar">
      <div className={`avatar-status ${user.available ? "available" : ""}`} />
      <div className={`avatar-circle ${size}`}>
        {user.name
          .split(" ")
          .map((word) => word[0].toUpperCase())
          .join("")}
      </div>
    </div>
  );
};

export default UserAvatar;
