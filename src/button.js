import * as React from 'react';
import { Left, Right } from 'sanctuary-either';
import { Just, Nothing } from 'sanctuary-maybe';

const button = label => status => setStatus => (
  <button
    style={{ marginRight: 10 }}
    onClick={() => setStatus(status)}>
    {label}
  </button>
);
const loadingButton = button('Loading')(Nothing);
const errorButton = button('Error')(Just(Left('bad')));
const successButton = button('Success')(Just(Right({ message: 'good' })));

export const setStatusToButtons = setStatus => (
  <>
    {loadingButton(setStatus)}
    {errorButton(setStatus)}
    {successButton(setStatus)}
  </>
);