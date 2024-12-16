import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import React from 'react';

type Param = {
  id: string;
};

export default function ProductPage() {
  const params = useParams<Param>();
  const id = params.id === undefined ? undefined : parseInt(params.id);
  const product = products.find((p) => p.id === id);

  return <div> {product?.description}</div>;
}
