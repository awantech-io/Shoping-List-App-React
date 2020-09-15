import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class ListItem extends Component {

    // style function
    getStyle = () => {
        return {
            background: '#f4f4f4f',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.list.title}</p>
            </div>
        )
    }
}

ListItem.propTypes = {
    list:PropTypes.object.isRequired
}

export default ListItem
