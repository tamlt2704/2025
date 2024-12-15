import React from 'react';

type Props = {
  onClick: () => void;
};

export default function Reset({ onClick }: Props) {
  console.log('render reset');
  return <button onClick={onClick}> Reset </button>;
}
