import * as React from 'react';
import { either, maybe_ } from 'sanctuary';

// Nothing
const LoadingView = () => <span>Loading</span>;
const loading = () => <LoadingView />;

// Just(Left)
const ErrorView = ({ error }) => <span>Error: {error}</span>;
const error = error => <ErrorView error={error} />;

// Just(Right)
const SuccessView = ({ data: { message } }) => <span>Success: {message}</span>;
const success = data => <SuccessView data={data} />;

export const statusToView = maybe_(loading)(either(error)(success));