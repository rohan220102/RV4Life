import React, {Component} from 'react';
import { render } from 'react-dom';
import '../css/card.css'


export default class Card extends Component {
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

