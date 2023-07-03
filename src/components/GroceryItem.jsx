import React, { useState } from "react";

const GroceryItem = ({ item, handleEditItem, handleDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);

  const onEdit = () => {
    handleEditItem(item.id, newItem);
    setIsEditing(false);
  };
  return (
    <>
      <li className="flex justify-between items-center font-bold p-2 border-b-2 mb-2">
        {isEditing ? (
          <input
            className="grow p-2 border border-black mr-10 rounded"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}

        <div>
          <button
            className="p-2 rounded bg-yellow-300 hover:bg-yellow-500 mr-4 w-20 text-white"
            onClick={() => (isEditing ? onEdit() : setIsEditing(true))}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => handleDeleteItem(item.id)}
            className="p-2 rounded bg-red-500 hover:bg-red-700 mr-[-6px] w-20 text-white"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default GroceryItem;
