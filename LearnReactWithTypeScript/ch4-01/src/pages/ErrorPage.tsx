import React from 'react';
import Header from '../Header';
import { useRouteError } from 'react-router-dom';

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <p> Error Page </p>
      {isError(error) && <p className="text-base text-slate-700">{error.statusText} </p>}
    </>
  );
}
