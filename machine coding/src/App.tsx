import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(["hello"]);

  const AddToList = () => {
    if (inputValue.trim() === "") return;
    // if(list.find((input)=>input===inputValue)) return
    setList((prev) => [...prev, inputValue]);
    setInputValue("")
  };

  return (
    <div className="flex flex-col gap-2 h-full gap-y-4 justify-center items-center mt-15 ">
      <h1 className="text-4xl font-bold">Chips Input</h1>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            AddToList();
          }
        }}
        value={inputValue}
        type="text"
        className="w-[50%] mt-5 p-2 rounded-md border-2"
      />
      <div className="flex flex-wrap justify-center mt-4 w-[50%] gap-4">
        {list.map((input, index) => (
          <h1
            key={index}
            className="bg-gray-100 p-2 px-4 rounded-full border-2"
          >
            {input}
            <span onClick={()=>setList((prev)=>prev.filter((x,indexx)=>indexx!=index))} className="ml-2 cursor-pointer">❌</span>

          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
