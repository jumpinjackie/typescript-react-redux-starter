import * as React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
 
    return <Jumbotron>
      <h1>Counter</h1>
      <Counter
        counter={ counter }
        increment={ increaseCounter }
        decrement={ decreaseCounter } />
    </Jumbotron>;
  };
}
