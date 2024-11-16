import menuIcon from "../assets/icons/3 dot menu.svg";
import addIcon from "../assets/icons/add.svg";
import backlogIcon from "../assets/icons/Backlog.svg";
import cancelledIcon from "../assets/icons/Cancelled.svg";
import displayIcon from "../assets/icons/Display.svg";
import doneIcon from "../assets/icons/Done.svg";
import downIcon from "../assets/icons/down.svg";
import highPriorityIcon from "../assets/icons/Img - High Priority.svg";
import lowPriorityIcon from "../assets/icons/Img - Low Priority.svg";
import mediumPriorityIcon from "../assets/icons/Img - Medium Priority.svg";
import inProgressIcon from "../assets/icons/in-progress.svg";
import noPriorityIcon from "../assets/icons/No-priority.svg";
import todoIcon from "../assets/icons/To-do.svg";
import urgentPriorityColorIcon from "../assets/icons/SVG - Urgent Priority colour.svg";
import urgentPriorityGreyIcon from "../assets/icons/SVG - Urgent Priority grey.svg";

export const icons = {
  menu: menuIcon,
  add: addIcon,
  backlog: backlogIcon,
  cancelled: cancelledIcon,
  display: displayIcon,
  done: doneIcon,
  down: downIcon,
  highPriority: highPriorityIcon,
  lowPriority: lowPriorityIcon,
  mediumPriority: mediumPriorityIcon,
  inProgress: inProgressIcon,
  noPriority: noPriorityIcon,
  todo: todoIcon,
  urgentPriorityColor: urgentPriorityColorIcon,
  urgentPriorityGrey: urgentPriorityGreyIcon,
};

export const getStatusIcon = (status) => {
  const statusMap = {
    Backlog: icons.backlog,
    Todo: icons.todo,
    "In Progress": icons.inProgress,
    Done: icons.done,
    Canceled: icons.cancelled,
  };
  return statusMap[status];
};

export const getPriorityIcon = (priority) => {
  const priorityMap = {
    4: icons.urgentPriorityColor,
    3: icons.highPriority,
    2: icons.mediumPriority,
    1: icons.lowPriority,
    0: icons.noPriority,
  };
  return priorityMap[priority];
};
