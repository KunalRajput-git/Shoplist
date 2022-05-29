import { useState } from "react";
import { Button } from "../GlobalComponents/GlobalComp";

import "./Shoplistfilter.css";

const ShopListFilter = ({ onFilterHandle }) => {
  const location = ["Thane", "Pune", "Mumbai", "Suburban", "Nashik", "Nagpur"];
  const category = [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Nagpur",
    "Electronics",
  ];
  const [filterData, setfilterData] = useState("");

  return (
    <div className="FilterContainer">
      <div>
        <h3 className="Selection"> Select Location </h3>
        {location.map((data, index) => (
          <>
            <input
              key={index}
              onChange={(e) =>
                e.target.checked ? onFilterHandle(e.target.value) : ""
              }
              value={data}
              type="checkbox"
              id={data}
            />
            <label style={{ margin: 5 }} htmlFor={data}>
              {data}
            </label>
          </>
        ))}
      </div>
      <div>
        <h3 className="Selection">Select Category</h3>
        {category.map((data, index) => (
          <>
            <input key={index} value={data} type="checkbox" id={data} />
            <label style={{ margin: 5 }} htmlFor={data}>
              {data}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShopListFilter;
