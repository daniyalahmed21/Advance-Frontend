import React from "react";

const TextInput = ({type="text",label ,placeholder="Enter a word or phrase",onChangeHandler,value}) => {
    return (
        <label >
            <span className="text-gray-700 text-2xl">{label}</span>
            <input 
                
                value={value}
                type={type}
                className="px-4 mt-2 mb-2 py-2 border border-gray-500 rounded-md w-full"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            
        </label>
  );
};

export default TextInput;
