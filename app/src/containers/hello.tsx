import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import Hello from '../components/hello';
import { StoreState } from '../types/index';

// Maps state to properties
export const mapStateToProps = (state: StoreState) => {
  const newState: StoreState = {
    enthusiasmLevel: state.enthusiasmLevel,
    name: state.name
  };
  return newState;
};

// Maps functions to properties
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  };
}

// Connect functions to components
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
