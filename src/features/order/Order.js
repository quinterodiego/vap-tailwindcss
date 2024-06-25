import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
} from '../product-list/productListSlice';

export default function Order() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className=""></div>
    </div>
  );
}
