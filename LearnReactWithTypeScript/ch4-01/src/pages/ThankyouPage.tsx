import React from 'react';
import { useParams } from 'react-router-dom';

export default function ThankyouPage() {
  const { name } = useParams<{ name: string }>();
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <div role="alert" className="bg-green-100 py-5 px-6 text-base text-green-600">
        Thanks {name} We'll be in touch with you shortly
      </div>
    </div>
  );
}
