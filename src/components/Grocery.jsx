import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItem from "./GroceryItem";

const Grocery = () => {
  const inputRef = useRef();
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [errors, setErrors] = useState("");

  const handleAddItem = () => {
    if (item) {
      setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
      setItem("");
      setErrors("");
    } else {
      setErrors("Grocery item must not be empty!");
      inputRef.current.focus();
    }
  };

  const handleEditItem = (id, newItem) => {
    const updatedGroceryItem = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, name: newItem };
      }
      return item;
    });
    setGroceryItems(updatedGroceryItem);
  };

  const handleDeleteItem = (removeId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== removeId);
    setGroceryItems(filteredItems);
  };
  const handleClearItems = () => {
    setGroceryItems([]);
  };
  return (
    <div className="flex flex-col items-center w-full max-w-[600px] p-[2rem] bg-white border border-gray-200 rounded-lg shadow">
      <h1 className="font-black">Grocery Buddy</h1>
      <div className="flex flex-col justify-between w-full mb-4">
        <div className="flex justify-between mt-5">
          <input
            ref={inputRef}
            className="grow p-2 border border-black mr-5 rounded"
            type="text"
            placeholder="Enter an item...."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            className="bg-sky-400 hover:bg-sky-600 p-2 text-white rounded"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
        <div>{errors ? <p className="text-red-500">{errors}</p> : null}</div>
      </div>
      <ul className="w-full list-none p-0 ">
        {groceryItems.map((item) => (
          <GroceryItem
            key={item.id}
            item={item}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      {groceryItems.length > 0 ? (
        <button
          className="p-2 text-red-500 rounded border-2  border-red-500  hover:bg-red-500 hover:text-white mr-[-6px] mt-5 "
          onClick={handleClearItems}
        >
          Clear Grocery Items
        </button>
      ) : null}
    </div>
  );
};

export default Grocery;
