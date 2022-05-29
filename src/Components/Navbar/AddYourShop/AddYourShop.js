import { useReducer, useState } from "react";
import { Button } from "../GlobalComponents/GlobalComp";
import "./AddYourShop.css";
import { Select } from "../GlobalComponents/GlobalComp";
import { Card } from "../GlobalComponents/GlobalComp";

const AddYourShop = () => {
  const data = {
    location: [
      "Select Area",
      "Thane",
      "Pune",
      "Mumbai",
      "Suburban",
      "Nashik",
      "Nagpur",
    ],
    category: [
      "Select Category",
      "Grocery",
      "Butcher",
      "Baker",
      "Chemist",
      "Nagpur",
      "Electronics",
    ],
  };

  const [shopName, setShopName] = useState("");
  const [selectArea, setSelectArea] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [openingTime, setopeningTime] = useState("");
  const [closingTime, setclosingTime] = useState("");

  const [shopListData, setshopListData] = useState([]);

  const onAddShopHandle = () => {
    setshopListData([
      {
        shopName,
        selectArea,
        selectCategory,
        openingTime,
        closingTime,
      },

      ...shopListData,
    ]);
  };

  const onDelHandle = (curCard) => {
    setshopListData(shopListData.filter((data) => data !== curCard));
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="Card">
          <input
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="formInput"
            placeholder="Enter Shop Name"
          />

          <Select
            value={selectArea}
            onChange={(e) => setSelectArea(e.target.value)}
            className="fromSelect"
            data={data.location}
          />
          <Select
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="fromSelect"
            data={data.category}
          ></Select>

          <label htmlFor="openingTime">Opening Time : </label>
          <input
            value={openingTime}
            onChange={(e) => setopeningTime(e.target.value)}
            className="formInput formInputDate"
            type="time"
            id="openingTime"
          />

          <label htmlFor="closingTime">Closing Time : </label>
          <input
            value={closingTime}
            onChange={(e) => setclosingTime(e.target.value)}
            className="formInput formInputDate"
            type="time"
            id="closingTime"
          />

          <Button event={onAddShopHandle} text="Add To Shoplist" />
        </div>
      </div>

      <div className="shopContainer">
        {shopListData.map((data) => (
          <Card onDelHandle={onDelHandle} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AddYourShop;
