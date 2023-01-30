import React, {Component} from 'react';
import Button from './Button.js';
import '../css/card.css';
import colors from '../colors.js';
import PropTypes from 'prop-types';


export class Card1 extends Component {
  state = {
    selected: this.props.selected
  };

  isSelected = (selected) => {
    var className = 'card-container';
    if (selected) {
      className += ' selected';
    }
    return className;
  };

  render() {
    const {title, rating, detour, visited, temp, selected} = this.props;
    return (
      <div className={this.isSelected(this.state.selected)}>
        <h4>{title}</h4>
        <p>{rating}</p>
        <p>{detour}</p>
        <p>{visited}</p>
        <p>{temp}</p>
      </div>
    )
  }
}

const isSelected = (selected) => {
  var className = 'card-container';
  if (selected) {
    className += ' selected';
  }
  return className;
};

const Card = ({title, rating, detour, visited, temp, selected=false}) => {
  return (
    <div className={isSelected(selected)} tabIndex={-1}>
      <header className='header'>
        <h4 className="title">{title}</h4>
        {selected && (<Button className="btn" color={colors.primary} text="Add"/>)}
      </header>
    </div>
  )
}

Card.defaultProps = {
  title: 'Task Tracker',
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Card;