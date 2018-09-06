import React, { Component } from 'react';

class CreateWatchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_list_name: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

render(){
    return (
        <div className="container">
            <h1>Create a New Watch List</h1>
            <form onSubmit = {this.handleSubmit} >
                <label> Name of Watch List:</label>
                <input
                    type='text'
                    name='category_list_name'
                    value={this.state.category_list_name}
                    onChange={this.handleChange}
                    placeholder="Create new name"
                ></input>

                <input type="submit" value="Name this watch list"
                ></input>
            </form>
        </div>
    )
}
}

export default CreateWatchList