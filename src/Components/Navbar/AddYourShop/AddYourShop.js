import { useReducer, useState, useTransition } from "react";
import { Button } from "../GlobalComponents/GlobalComp";
import "./AddYourShop.css";
import { Select } from "../GlobalComponents/GlobalComp";
import { Card } from "../GlobalComponents/ShoplistCard";
import ShopListFilter from "./ShoplistFilter";

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
  const [shopListData, setshopListData] = useState([
    {
      shopName: "Lovely Parlor",
      selectArea: "Pune",
      selectCategory: "Chemist",
    },
    {
      shopName: "Grooming Shop",
      selectArea: "Mumbai",
      selectCategory: "Butcher",
    },
  ]);
  const [selectedCard, setselectedCard] = useState("");
  const [editStatus, seteditStatus] = useState(false);
  const [filterData, setfilterData] = useState("");

  const onFilterHandle = (value) => {
    console.log(value);
    setfilterData(value);
    setshopListData(
      shopListData.filter((data) => {
        return data.selectArea.includes(filterData) ? data : shopListData;
      })
    );
  };

  const onSaveChages = () => {
    setshopListData([
      {
        ...selectedCard,
        shopName,
        selectArea,
        selectCategory,
        openingTime,
        closingTime,
      },
      ...shopListData,
    ]);
    seteditStatus(false);
    setselectedCard("");
    setShopName("");
    setSelectArea("");
    setSelectCategory("");
    setopeningTime("");
    setclosingTime("");
  };

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
    setselectedCard("");
    setShopName("");
    setSelectArea("");
    setSelectCategory("");
    setopeningTime("");
    setclosingTime("");
  };
  const onDelHandle = (curCard) => {
    setshopListData(shopListData.filter((data) => data !== curCard));
  };

  const onEditHandle = (curCard) => {
    seteditStatus(true);
    setselectedCard(curCard);
    setShopName(curCard.shopName);
    setSelectArea(curCard.selectArea);
    setSelectCategory(curCard.selectCategory);
    setopeningTime(openingTime);
    setclosingTime(closingTime);
    setshopListData(shopListData.filter((data) => data !== curCard));
  };

  return (
    <>
      <ShopListFilter onFilterHandle={onFilterHandle} />
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

            <Button
              event={editStatus ? onSaveChages : onAddShopHandle}
              text={editStatus ? "Save Changes" : "Add To Shoplist"}
            />
          </div>
        </div>
        <div className="shopContainer">
          {shopListData.length ? (
            shopListData.map((data, index) => (
              <Card
                key={index}
                onEditHandle={onEditHandle}
                onDelHandle={onDelHandle}
                data={data}
              />
            ))
          ) : (
            <h1 className="NoData">No Shops Added</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AddYourShop;
