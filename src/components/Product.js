// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.component {
  render() {
    return (
      <div className="product">
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
<<<<<<< HEAD
        <li>{this.props.hasWatermark ? 'Watermarked' : 'Not watermaked'}</li>
=======
        <li>{this.props.hasWatermark}</li>
>>>>>>> dfa47455ada9f8bad0e4c9d2e67dabf0cc322c50
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
      </div>
    )
  }
}
<<<<<<< HEAD

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if(!props[propName]) {
      return new Error('The `weight` prop is required.');
    } else {
      let value = props[propName];
      if (typeof value === 'number') {
        return value > 80 && value < 300 ? null : new Error('The weight prop should range between 80 and 300');
      } else {
        return new Error('The `weight` prop is not a number.')
      }
    }
  }
};
=======
>>>>>>> dfa47455ada9f8bad0e4c9d2e67dabf0cc322c50
