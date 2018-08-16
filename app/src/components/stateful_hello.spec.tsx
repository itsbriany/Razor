import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './stateful_hello';

describe('Hello', () => {
  it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
  });

  it('does not throw when the enthusiasm level is 0', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
    }).toThrow();
  });

  it('increments the enthusiasm level when the + button is clicked', () => {
      const hello = enzyme.shallow(<Hello name='Daniel' />);
      hello.find('.incrementEnthusiasm').simulate('click');
      expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!');

      hello.find('.incrementEnthusiasm').simulate('click');
      expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!');
  });

  it('decrements the enthusiasm level when the - button is clicked', () => {
      const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={3} />);
      hello.find('.decrementEnthusiasm').simulate('click');
      expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!');

      hello.find('.decrementEnthusiasm').simulate('click');
      expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });
});
