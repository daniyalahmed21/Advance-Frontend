const OnClickTracking = ({ children }) => {
  const handleOnClick = () => {
    console.log("Clicked");
  };
  return <div onClick={handleOnClick}>{children}</div>;
};

const SimpleComponent = ({ x }) => {
  return <div>{x}</div>;
};

function App() {
  return (
    <OnClickTracking>
      <SimpleComponent x="hello" />
    </OnClickTracking>
  );
}

export default App;
