
import Item from "./items.json";
import { useState } from "react";
export default function ItemList()
{
  const[sortBy, setSortBy] = useState("name");
  const sortitems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
      return(

        <section>
          {items.map((item) => (
          <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          />
          ))}
        </section>
      );
}