import * as React from 'react';
import { connect } from 'react-redux';

interface IAboutPageProps extends React.Props<any> {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AboutPage extends React.Component<IAboutPageProps, void> {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="caps">About Us</h2>
        <p>
          Rangle.io is a next-generation HTML5 design and development firm
          dedicated to modern, responsive web and mobile applications.
        </p>
      </div>
    );
  }
};
