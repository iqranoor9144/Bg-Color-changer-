import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-amber-50 rounded p-4 gap-3 flex justify-center ">

        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg "
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>

        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

        <button
          className="bg-gray-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setColor("gray")}
        >
          Grey
        </button>

      </div>
    </div>
  )
}

export default App