import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white"
            style={{ backgroundColor: color }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
