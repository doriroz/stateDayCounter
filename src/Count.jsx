import Button from "./Button";
const Count = (props) => {
  const style = {
    padding: "10px",
    margin: "10px",
    fontSize: "30px",
    borderRadius: "50%"
  };

  return (
    <div style={{ display: "flex", width: "100px", margin: "0 auto" }}>
      <button style={style} onClick={props.plus}>
        +
      </button>
      <p>Count:{props.count}</p>
      <button style={style} onClick={props.minus}>
        -
      </button>
    </div>
  );
};

export default Count;
