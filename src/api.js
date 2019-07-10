import { after, value } from 'fluture';
import { compose } from 'sanctuary';
import { Just } from 'sanctuary-maybe';
import { Right } from 'sanctuary-either';

const JustRight = compose(Just)(Right);

export const setInitialStatus = setStatus =>
  value(compose(setStatus)(JustRight))(after(1000)({ message: 'Initial' }));