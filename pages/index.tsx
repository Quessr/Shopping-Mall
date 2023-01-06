import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { counterSlice } from "../store/features/counter";
import styled from "styled-components";
import { useQuery } from "react-query";
import "twin.macro";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(1);
  const query = useQuery(["todos", value], () =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${value}`).then(
      (response) => response.json()
    )
  );
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => {
    return state.counter.value;
  });
  return (
    <>
      <Title>Hello World!</Title>
      {/* <p>Loading: {query.isLoading.toString()}</p> */}
      <p>Data: {JSON.stringify(query.data, null, 2)}</p>
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
      <input
        tw="border hover:border-black"
        type="number"
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      />
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
