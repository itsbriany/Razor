import Hello from '../components/hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Maps state to properties
export const mapStateToProps = (state: StoreState) => {
  return {
    enthusiasmLevel: state.enthusiasmLevel,
    name: state.name,
  } as StoreState;
};

// Maps functions to properties
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

// Connect functions to components
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
