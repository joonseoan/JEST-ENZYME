import React, { Component } from 'react';
import {connect} from 'react-redux';

class ComponentList extends Component {
    
    static defaultProps = {
        coms:[]
    }

    renderComponents(){
        return this.props.coms.map(component => (

            <li key={ component }>{ component }</li>
        ));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComponents()}
                </ul>        
            </div>
        );
    }
}

function mapStateToProps({ coms }) {

    return { coms }

}
export default connect(mapStateToProps)(ComponentList);
