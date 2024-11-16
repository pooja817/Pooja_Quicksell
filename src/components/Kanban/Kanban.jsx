import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Column from "../Column/Column";
import {
  groupByStatus,
  groupByUser,
  groupByPriority,
  sortTickets,
} from "../../utils/helpers";
import "./Kanban.css";

const Kanban = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("kanban_grouping") || "status";
  });
  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem("kanban_ordering") || "priority";
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Save view state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("kanban_grouping", grouping);
      localStorage.setItem("kanban_ordering", ordering);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [grouping, ordering]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleOrderingChange = (newOrdering) => {
    setOrdering(newOrdering);
  };

  const getGroupedTickets = () => {
    let grouped;
    switch (grouping) {
      case "user":
        grouped = groupByUser(tickets, users);
        return Object.entries(grouped).map(([key, tickets]) => ({
          title: key,
          tickets,
          count: tickets.length,
        }));
      case "priority":
        grouped = groupByPriority(tickets);
        return Object.entries(grouped).map(([key, data]) => ({
          title: key,
          tickets: data.tickets,
          count: data.tickets.length,
          icon: data.icon,
        }));
      default:
        grouped = groupByStatus(tickets);
        return Object.entries(grouped).map(([key, tickets]) => ({
          title: key,
          tickets,
          count: tickets.length,
        }));
    }
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="kanban">
      <Header
        grouping={grouping}
        ordering={ordering}
        onGroupingChange={handleGroupingChange}
        onOrderingChange={handleOrderingChange}
      />
      <div className="kanban-board">
        {groupedTickets.map(({ title, tickets, count, icon }) => (
          <Column
            key={title}
            title={title}
            tickets={sortTickets(tickets, ordering)}
            users={users}
            count={count}
            groupBy={grouping}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
