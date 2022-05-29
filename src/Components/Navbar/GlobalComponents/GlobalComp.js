import "./GlobalComp.css";

export const Button = ({ text, event }) => {
  return (
    <button onClick={event} className="Gbtn">
      {text}
    </button>
  );
};

export const Select = ({ value, onChange, className, data }) => {
  return (
    <select onChange={onChange} value={value} className={className}>
      {data.map((opt, index) => (
        <option key={index}>{opt}</option>
      ))}
    </select>
  );
};
