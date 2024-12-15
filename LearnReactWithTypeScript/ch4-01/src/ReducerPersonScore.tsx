import React, { useCallback, useMemo, useRef } from 'react';
import { useEffect, useReducer } from 'react';
import { getPerson } from './getPerson';
import Reset from './Reset';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'reset';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export default function ReducerPersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPerson().then((person) => dispatch({ type: 'initialize', name: person.name }));
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  function sillyExpensiveFunction() {
    console.log('sillyExpensiveFunction');
    let sum = 0;

    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    return sum;
  }

  const sillyExpensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  return (
    <div>
      <h3>
        Reducer component {name} {score}
      </h3>
      <p> {sillyExpensiveCalculation} </p>
      <button onClick={() => dispatch({ type: 'increment' })} ref={addButtonRef}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> Subtract </button>
      {/* <button onClick={() => dispatch({ type: 'reset' })}> Reset </button> */}
      <Reset onClick={handleReset} />
    </div>
  );
}
