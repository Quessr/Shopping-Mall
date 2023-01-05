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
    </>
  );
}
