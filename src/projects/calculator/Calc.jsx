import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };
 
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <input
          type="text"
          value={input}
          className="w-full p-3 text-xl text-right bg-gray-700 text-white rounded"
          readOnly
        />
        <div className="grid grid-cols-4 gap-2 mt-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === "=" ? handleCalculate() : handleClick(char))}
              className="p-4 text-xl bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 text-xl bg-red-600 text-white rounded hover:bg-red-500"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
