import * as React from 'react';
import { Button } from 'react-bootstrap';

interface ICounterProps extends React.Props<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

function Counter({ counter, increment, decrement }) {
  return <div className="container">
    <div className="row">
      <div className="span3">
        <Button className="bg-black col-2"
          onClick={ decrement }>
          -
        </Button>
      </div>
      <div className="span6">
          { counter }
      </div>
      <div className="span3">
        <Button className="col-2"
          onClick={ increment }>
          +
        </Button>
      </div>
    </div>
  </div>;
}

export default Counter;
