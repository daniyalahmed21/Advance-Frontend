import { useEffect, useRef, useState } from "react";

function otpInput() {
  const [inputArray, setInputArray] = useState<string[]>(new Array(5).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (value: string, index: number) => {
    console.log(value)
    if (isNaN(Number(value))) return;

    const newArray = [...inputArray];
    newArray[index] = value.slice(-1);
    setInputArray(newArray);

    if(value) inputRef.current[index+1]?.focus()
  };

  const handleBackspace = (e,index)=>{
    if(inputArray[index]==="" && e.key === "Backspace")
    inputRef.current[index-1]?.focus()
  }

  useEffect(()=>{
    inputRef.current[0]?.focus()
  },[])
  
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-4xl font-medium mb-10">OTP INPUT</h1>
      <div className="flex gap-2">
        {inputArray.map((input, index) => (
          <div key={index}>
            <input
              className="border-4 p-2 text-center font-medium border-zinc-500 rounded-xl w-14 h-14"
              type="text"
              value={inputArray[index]}
              ref={(el)=>(inputRef.current[index]=el)}
              onKeyDown={(e)=>handleBackspace(e,index)}
              onChange={(e) => handleInputChange(e.target.value, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default otpInput;
