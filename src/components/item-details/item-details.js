import React, { Component } from 'react';

import './item-details.sass';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span className="list-value">{ item[field] }</span>
    </li>
  );
};


export default class ItemDetails extends Component {

  state = {
    item: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    } 
  }

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId){
      return; 
    }
    
    getData(itemId)
      .then((item) => {
        this.setState({ item });
      });
  }

  render() {

    const { item } = this.state;

    if (!item) {
      return <div className="select-character">Select a character from a list</div>;
    }

    const { image, name } = item;
      
    return (
      <div className="character-details card">
        <img className="character-image"
          src={`${image}`} 
          alt={`characters: ${name}`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
