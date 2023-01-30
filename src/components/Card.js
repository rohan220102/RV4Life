import React, {Component} from 'react';
import Button from './Button.js';
import '../css/card.css';
import colors from '../colors.js';
import PropTypes from 'prop-types';

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

export default Card;

Card.defaultProps = {
  title: 'Task Tracker',
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

const isSelected = (selected) => {
  var className = 'card-container';
  if (selected) {
    className += ' selected';
  }
  return className;
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
