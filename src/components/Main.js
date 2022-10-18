const Main = () => {
  const handleClick = (e) => {
    console.log("Hello");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="main">
      <h2>Home Page</h2>
      {/* enter function without parameters */}
      <button onClick={handleClick}>Click Me</button>
      {/* enter function with parameters */}
      <button
        onClick={() => {
          handleClickAgain("Liz");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Main;
