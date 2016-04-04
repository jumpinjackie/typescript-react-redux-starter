import * as React from 'react';
import * as ReduxForm from 'redux-form';
import { Input, Alert, Button } from 'react-bootstrap';

interface ILoginFormProps {
  onSubmit: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    username: ReduxForm.FieldProp;
    password: ReduxForm.FieldProp;
  };
};

// Making this a class-based component until redux-form typings support 
// stateless functional components.
class LoginForm extends React.Component<ILoginFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        username,
        password
      }
    } = this.props;

    let loadingAlert = null;
    if (isPending)
      loadingAlert = <Alert bsStyle="info">Loading ...</Alert>;
    let errorAlert = null;
    if (hasError)
      errorAlert = <Alert bsStyle="danger">Invalid username and/or password</Alert>;

    let valErrorUsername = null;
    if (!!(username.touched && username.error))
      valErrorUsername = <Alert bsStyle="danger"><strong>{username.error}</strong></Alert>
    
    let valErrorPassword = null;
    if (!!(password.touched && password.error))
      valErrorPassword = <Alert bsStyle="danger"><strong>{password.error}</strong></Alert>
    
    return <form onSubmit={ handleSubmit }>
      {loadingAlert}
      {errorAlert}
      <Input type="text" label="Username" placeholder="Username" {...username} />
      {valErrorUsername}
      <Input type="password" label="Password" placeholder="Password" {...password} />
      {valErrorPassword}
      <Button type="submit">Login</Button>
      <Button onClick={ resetForm }>Clear</Button>
    </form>;
  }

  static validate(values) {
    const errors = { username: '', password: '' };

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate: LoginForm.validate,
})(LoginForm);
