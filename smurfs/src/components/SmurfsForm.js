import React from 'react';

// REDUX
import { connect } from 'react-redux';

import {
    onNameChange,
    onAgeChange,
    onHeightChange,
    postSmurf,
} from '../actions'

// COMPONENTS
import { TextField, Container, Button } from '@material-ui/core'

const SmurfsForm = ({
    values, 
    onNameChange, 
    onAgeChange, 
    onHeightChange,
    postSmurf
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        postSmurf(values);
    };

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    placeholder="name"
                    type="text"
                    name="name"
                    value={ values.name }
                    onChange = { onNameChange }
                />

                <TextField
                    placeholder="age"
                    name="age"
                    value={ values.age }
                    onChange = { onAgeChange }
                />

                <TextField
                    placeholder="height"
                    name="height"
                    value={ values.height }
                    onChange={ onHeightChange }
                />
                <Button onClick={handleSubmit}>Add Smurf</Button>
            </form>
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log(state.formValues)
    return {
        values: state.formValues,
        disabled: state.disabled
    }
}

export default connect(
    mapStateToProps,
        {
            onNameChange,
            onAgeChange,
            onHeightChange,
            postSmurf
        }
)(SmurfsForm);