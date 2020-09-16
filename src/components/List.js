import React, { Component } from 'react'
import ListItem from './ListItem';
import PropTypes from 'prop-types';

export class List extends Component {
    render() {
        
        return (
           this.props.lists.map(
               (list) => (
                   <ListItem key={list.id} list={list}
                   markComplete={this.props.markComplete}
                   />
               )
           )
        )

    }
}

// Proptypes
List.propTypes = {
    lists:PropTypes.array.isRequired
}

export default List
