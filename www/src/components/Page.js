import react, { Component } from 'react';
import BaseStyle from '../assets/styles/core/_base';

class Page extends Component {
  render() {
    return (
      <>
        <BaseStyle />
        {React.cloneElement(this.props.children, this.props)}
        Heis
      </>
    );
  }
}

export default Page;
