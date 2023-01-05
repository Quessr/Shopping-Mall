import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { counterSlice } from "../store/features/counter";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => {
    return state.counter.value;
  });
  return (
    <>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.decrement());
        }}
      >
        -
      </button>
      {count}
      <h1 className="text-3xl font-bold underline text-pink-500">
        Hello world!
      </h1>
    </>
  );
}
