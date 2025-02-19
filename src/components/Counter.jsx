import { Button, Divider } from "@heroui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [count, setCount] = useState(0);
  const selector = useSelector((store) => store.counter);
  const messageSelector = useSelector((store) => store.message);
  const dispacth = useDispatch();

  const incremenetCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementGlobalCounter = () => {
    dispacth({
      type: "INCREMENT",
    })
  }

  return (
    <div>
      <div className="flex items-center justify-around min-h-96">
        <Button color="danger" onClick={decrementCounter}>
          Substract
        </Button>
        <span className="text-3xl font-semibold">{count}</span>
        <Button color="primary" onClick={incremenetCounter}>
          Add
        </Button>
      </div>

      <Divider />
      <div className="flex items-center justify-around min-h-96">
        <Button color="danger" >
          Substract
        </Button>
        <span className="text-3xl font-semibold"></span>
        <Button onClick={incrementGlobalCounter} color="primary" >
          Add
        </Button>
      </div>
      <p className="text-center font-semibold">
        Global Count : {selector.count}
      </p>
      
      <p className="text-center font-semibold">
        Global Message : {messageSelector}
      </p>
    </div>
  );
};

export default Counter;
