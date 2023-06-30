const Button = (props) => {
  const style = {
    padding: "10px",
    margin: "10px",
    fontSize: "30px",
    borderRadius: "50%"
  };

  return (
    <>
      <button style={style}>{props.sign}</button>
    </>
  );
};

export default Button;
