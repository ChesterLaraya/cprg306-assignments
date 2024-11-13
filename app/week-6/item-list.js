
"use client";
import { useState, useEffect } from "react";
import Item from "./item"; // Import Item component, not items.json
import itemsData from "./items.json"; // Import the JSON data as itemsData

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    // Load items from the JSON data on mount
    setItems(itemsData);
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <>
      <div>
        <button onClick={() => setSortBy("name")} className="w-9 rounded-lg bg-orange-300">
          Name
        </button>
        <button onClick={() => setSortBy("category")} className="w-9 rounded-lg bg-orange-300 ml-2">
          Category
        </button>
      </div>
      
      <section>
        {sortedItems.map((item) => (
          <Item
            key={item.id} // Use item.id for a unique key
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </section>
    </>
  );
}
