import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center items-center inset-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Indigo" }}
            onClick={() => setColor("Indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Violet" }}
            onClick={() => setColor("Violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
