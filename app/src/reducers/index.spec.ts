import * as constants from '../constants';
import { enthusiasm } from '../reducers/index';

describe('enthusiasm reducer', () => {
  it('should return the initial state', () => {
    expect(enthusiasm(undefined, {})).toEqual({
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
