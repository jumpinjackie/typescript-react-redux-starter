import * as React from 'react';
import { Modal } from 'react-bootstrap';
import LoginForm from './login-form';

interface ILoginModalProps extends React.Props<any> {
  isVisible: boolean;
  isPending: boolean;
  hasError: boolean;
  onSubmit: () => void;
};

export default class LoginModal extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    let close = () => this.setState({ show: false});
    return <Modal show={ this.props.isVisible } onHide={ close } aria-labelledby="login-modal-title">
      <Modal.Header>
        <Modal.Title id="login-modal-title">Login</Modal.Title> 
      </Modal.Header>
      <Modal.Body>
        <LoginForm
          isPending={ this.props.isPending }
          hasError={ this.props.hasError }
          onSubmit={ this.props.onSubmit } />
      </Modal.Body>
    </Modal>;
  }
}