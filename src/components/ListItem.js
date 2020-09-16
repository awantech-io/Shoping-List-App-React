import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class ListItem extends Component {

    // style function
    getStyle = () => {
        return {
            background: '#f4f4f4f',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.list.completed ? 'line-through' : 'none'
        }
    }

    render() {
        console.log(this.props.list.completed)

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.list.id)}/>
                    {'  '}
                    {this.props.list.title}
                </p>
            </div>
        )
    }
}

ListItem.propTypes = {
    list:PropTypes.object.isRequired
}

export default ListItem
