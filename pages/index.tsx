import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { counterSlice } from "../store/features/counter";
import styled from "styled-components";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => {
    return state.counter.value;
  });
  return (
    <>
      <Title>Hello World!</Title>
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

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
