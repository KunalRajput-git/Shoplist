
export const Card = ({ data, onDelHandle, onEditHandle }) => {
    return (
      <div className="GCard">
        <h2>{data.shopName}</h2>
        <cite>{data.selectArea}</cite>
        <h4>Shop Category : {data.selectCategory}</h4>
        <h4>Opening Time : {data.openingTime}</h4>
        <h4>Closing Time : {data.closingTime}</h4>
  
        <button className="GCardBtn" onClick={() => onEditHandle(data)}>
          Edit
        </button>
  
        <button className="GCardBtn" onClick={() => onDelHandle(data)}>
          Remove
        </button>
      </div>
    );
  };