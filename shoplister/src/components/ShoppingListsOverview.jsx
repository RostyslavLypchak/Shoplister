import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialLists = [
  { id: 1, name: "Weekly Groceries", owner: "user1" },
  { id: 2, name: "Party Supplies", owner: "user2" },
];

const ShoppingListsOverview = () => {
  const [lists, setLists] = useState(initialLists);
  const navigate = useNavigate();

  const createList = () => {
    const newList = {
      id: lists.length + 1,
      name: `New List ${lists.length + 1}`,
      owner: "user1",
    };
    setLists([...lists, newList]);
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div className="lists-overview">
      <button onClick={createList} className="btn btn-primary">Create List</button>
      <ul>
        {lists.map((list) => (
          <li key={list.id} className="list-item">
            <span>{list.name}</span>
            <button onClick={() => navigate(`/lists/${list.id}`)} className="btn btn-secondary">View</button>
            <button onClick={() => deleteList(list.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListsOverview;
