import * as React from 'react';
import './hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button className='decrementEnthusiasm' onClick={this.onDecrement}>-</button>
        <button className='incrementEnthusiasm' onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  private onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  private onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  private updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
