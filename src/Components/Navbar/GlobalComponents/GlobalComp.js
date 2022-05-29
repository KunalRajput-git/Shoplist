import "./GlobalComp.css";

export const Button = ({ text, event }) => {
  return (
    <button onClick={event} className="Gbtn">
      {text}
    </button>
  );
};

export const Card = ({ data, onDelHandle }) => {
  return (
    <div className="GCard">
      <h2>{data.shopName}</h2>
      <cite>{data.selectArea}</cite>
      <h4>Shop Category : {data.selectCategory}</h4>
      <h4>Opening Time : {data.openingTime}</h4>
      <h4>Closing Time : {data.closingTime}</h4>
      <button className="GCardBtn">Edit</button>
      <button className="GCardBtn" onClick={() => onDelHandle(data)}>
        Remove
      </button>
    </div>
  );
};

export const Select = ({ value, onChange, className, data }) => {
  return (
    <select onChange={onChange} value={value} className={className}>
      {data.map((opt) => (
        <option>{opt}</option>
      ))}
    </select>
  );
};
