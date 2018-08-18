import * as actions from '.';
import { DecrementEnthusiasm, IncrementEnthusiasm } from '../actions';
import * as constants from '../constants';

describe('actions', () => {
  it('should increment the enthusiasm level', () => {
    const expectedAction: IncrementEnthusiasm = {
      type: constants.INCREMENT_ENTHUSIASM
    };
    expect(actions.incrementEnthusiasm()).toEqual(expectedAction);
  });

  it('should decrement the enthusiasm level', () => {
    const expectedAction: DecrementEnthusiasm = {
      type: constants.DECREMENT_ENTHUSIASM
    };
    expect(actions.decrementEnthusiasm()).toEqual(expectedAction);
  });
});
