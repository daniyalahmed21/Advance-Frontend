const ImpressionTrackable = (ChildComponent) => {
  return (props) => {
    const handleOnClick = () => {
      console.log("Clicked", ChildComponent.name);
    };

    return (
      <div onClick={handleOnClick}>
        <ChildComponent  {...props} />
      </div>
    );
  };
};

const SimpleComponent = ({ x }) => {
  return <div>{x}</div>;
};

const EnhancedComponent = ImpressionTrackable(SimpleComponent);

function App() {
  return (
    <div>
      <EnhancedComponent x={10} />
    </div>
  );
}

export default App;
