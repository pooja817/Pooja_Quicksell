import { icons } from "./icons";


export const groupByStatus = (tickets) => {
  const groups = {
    Backlog: [],
    Todo: [],
    "In Progress": [],
    Done: [],
    Canceled: [],
  };

  tickets.forEach((ticket) => {
    const status =
      ticket.status === "In progress" ? "In Progress" : ticket.status;
    if (groups[status]) {
      groups[status].push(ticket);
    }
  });

  return groups;
};

export const groupByUser = (tickets, users) => {
  return tickets.reduce((acc, ticket) => {
    const user = users.find((u) => u.id === ticket.userId);
    if (user) {
      if (!acc[user.name]) {
        acc[user.name] = [];
      }
      acc[user.name].push(ticket);
    }
    return acc;
  }, {});
};

export const groupByPriority = (tickets) => {
  const priorityMap = {
    4: { name: "Urgent", icon: icons.urgentPriorityColor },
    3: { name: "High", icon: icons.highPriority },
    2: { name: "Medium", icon: icons.mediumPriority },
    1: { name: "Low", icon: icons.lowPriority },
    0: { name: "No Priority", icon: icons.noPriority },
  };

  const groups = {
    Urgent: { tickets: [], icon: icons.urgentPriorityColor },
    High: { tickets: [], icon: icons.highPriority },
    Medium: { tickets: [], icon: icons.mediumPriority },
    Low: { tickets: [], icon: icons.lowPriority },
    "No Priority": { tickets: [], icon: icons.noPriority },
  };

  tickets.forEach((ticket) => {
    const priority = priorityMap[ticket.priority].name;
    groups[priority].tickets.push(ticket);
  });
  return groups;
};

export const sortTickets = (tickets, orderBy) => {
  return [...tickets].sort((a, b) => {
    if (orderBy === "priority") {
      return b.priority - a.priority;
    }
    return a.title.localeCompare(b.title);
  });
};

export const getStatusIcon = (status) => {
  const statusMap = {
    Backlog: "backlog",
    Todo: "todo",
    "In Progress": "in-progress",
    Done: "done",
    Canceled: "cancelled",
  };
  return `assets/${statusMap[status]}.svg`;
};

export const getPriorityIcon = (priority) => {
  const priorityMap = {
    4: "urgent",
    3: "high",
    2: "medium",
    1: "low",
    0: "no-priority",
  };
  return `assets/icons/${priorityMap[priority]}-priority.svg`;
};
