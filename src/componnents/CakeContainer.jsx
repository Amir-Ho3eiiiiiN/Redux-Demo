import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

export default function CakeContainer() {
  const [cakeNumber, setCakeNumber] = useState(1);

  // 1. accepts a fucntion as its parameter : selector function
  // 2. useSelector hooks return whatever returns by selector function
  const state = useSelector((state) => state.cake);

  // returns a reference to the dispatch fucntion in redux store
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 p-4  bg-red-300 rounded-xl shadow-xl ">
      <h3 className="text-center text-lg font-semibold pb-2 border-b mb-4 border-white">
        Buy Cake
      </h3>
      <p className="pl-2 mb-2">Cake Number : {state.numOfCakes}</p>
      <div className="flex items-center w-full bg-white rounded-xl px-4 gap-2 mb-2">
        <label htmlFor="cake" className="text-gray-500 cursor-pointer">
          how many do you need?
        </label>
        <input
          value={cakeNumber}
          onChange={(e) => setCakeNumber(e.target.value)}
          id="cake"
          type="number"
          className="flex-1 text-center border-none rounded-xl py-2 px-4 text-gray-600 focus:outline-none"
          min={0}
        />
      </div>
      <div className="text-right">
        <button
          className="bg-green-300 py-2 px-4 rounded-xl"
          onClick={() => dispatch(buyCake(cakeNumber))}
        >
          BUY
        </button>
      </div>
    </div>
  );
}
