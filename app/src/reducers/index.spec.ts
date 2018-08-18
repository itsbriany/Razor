// import { DefaultEnthusiasm } from '../actions';
import * as constants from '../constants';
// import { EnthusiasmAction } from '../actions';
import { enthusiasm } from '../reducers';
import { StoreState } from '../types';

describe('enthusiasm reducer', () => {
  it('should return the initial state', () => {
    /*
    const defaultEnthusiasm: DefaultEnthusiasm = {
      type: undefined;
    };
    */
    expect(enthusiasm(undefined, { type: undefined })).toEqual({
      enthusiasmLevel: 1,
      name: 'TypeScript'
    });
  });

  it('should handle INCREMENT_ENTHUSIASM', () => {
    expect(
      enthusiasm(undefined, {
        type: constants.INCREMENT_ENTHUSIASM
      })
    )
    .toEqual({
      enthusiasmLevel: 2,
      name: 'TypeScript'
    });
  });

  it('should handle DECREMENT_ENTHUSIASM', () => {
    const initialState: StoreState = {
      enthusiasmLevel: 3,
      name: 'TypeScript'
    };
    expect(
      enthusiasm(initialState, {
        type: constants.DECREMENT_ENTHUSIASM
      })
    )
    .toEqual({
      enthusiasmLevel: 2,
      name: 'TypeScript'
    });
  });

  it('should never reduce the enthusiasm level to anything less than 1', () => {
    const initialState: StoreState = {
      enthusiasmLevel: 1,
      name: 'TypeScript'
    };
    expect(
      enthusiasm(initialState, {
        type: constants.DECREMENT_ENTHUSIASM
      })
    )
    .toEqual({
      enthusiasmLevel: 1,
      name: 'TypeScript'
    });
  });
});
