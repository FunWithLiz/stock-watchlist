import React, { Component } from 'react';


class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_list: props.name.name_list,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUpdate(this.state, this.props.idToEdit);
    }

    render() {
        return(
        <div className="container">
            <h1>Edit Watch List</h1>
            <form onSubmit={this.handleSubmit} >
                <label> New Name of Watch List:</label>
                <input
                    type='text'
                    name='name_list'
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Edit name"
                ></input>

                <input type="submit" value="Edit the name for this watch list"
                ></input>
            </form>
        </div>
        )
    }
}

export default EditForm;