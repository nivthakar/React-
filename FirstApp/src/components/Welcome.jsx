import React from 'react';

class Welcome extends React.Component {
    render() {
      return  <h1 className='text-3xl font-bold text-purple-500'> Hello, {this.props.name}</h1>;
    } 
}
export default Welcome;