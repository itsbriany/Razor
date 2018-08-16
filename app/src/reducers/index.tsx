import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
import { StoreState } from '../types/index';

const initialState: StoreState = {
  enthusiasmLevel: 1,
  name: 'TypeScript'
};

export function enthusiasm(state: StoreState = initialState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
