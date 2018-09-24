import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'


class ComponentBox extends Component {

    state={

        comment:''

    };

    handeChange = (e) => {

        this.setState({

            comment: e.target.value

        });

        console.log(this.state.comment);

    }

    handleSubmit = (e) => {

        e.preventDefault();

        // console.log(this.props);

        this.props.saveComponent(this.state.comment);

        this.setState({

            comment:''

        });

        // this.setState({})
    }

    render() {

        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h4>Add a Comment</h4>
                    <textarea onChange={ this.handeChange } value={ this.state.comment } />

                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button type="button" onClick={this.props.fetchData}>Fetch Data</button>
            </div>
        );
    }
}

export default connect(null, actions)(ComponentBox);