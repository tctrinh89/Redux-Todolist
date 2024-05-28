import { useState } from "react";
import {
  increaseCount,
  decreaseCount,
  addNumber,
  increasrCoundByNumber,
  decreasrCoundByNumber,
} from "../../stores/features/countSlice";
import { selectCount } from "../../stores/selecter";
import { useDispatch, useSelector } from "react-redux";

export const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [number, setNumber] = useState(2);
  const handleIncreaseCount = () => {
    dispatch(increaseCount());
  };
  const handledDecreaseCount = () => {
    dispatch(decreaseCount());
  };
  const handleChangeInput = (e) => {
    setNumber(e.target.value);
    dispatch(addNumber(e.target.value));
  };
  const handleIncreaseCountByNumber = () => {
    dispatch(increasrCoundByNumber(number));
  };
  const handleDecreaseCountByNumber = () => {
    dispatch(decreasrCoundByNumber(number));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncreaseCount}>+</button>
      <button onClick={handledDecreaseCount}>-</button>
      <input value={number} onChange={handleChangeInput} />
      <button onClick={handleIncreaseCountByNumber}>+ number</button>
      <button onClick={handleDecreaseCountByNumber}>- number</button>
    </div>
  );
};
