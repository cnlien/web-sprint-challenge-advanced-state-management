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

import { Form, Input, Button, FormGroup, Row, Col } from 'reactstrap'

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
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Row>
                        <Col>
                            <Input
                                type="text"
                                placeholder="name"
                                name="name"
                                value={ values.name }
                                onChange = { onNameChange }
                                variant="filled"
                                size="normal"
                            />
                        </Col>
                        <Col>
                            <Input
                                type="text"
                                placeholder="age"
                                name="age"
                                value={ values.age }
                                onChange = { onAgeChange }
                                variant="filled"
                                size="normal"
                            />
                        </Col>
                        <Col>
                            <Input
                                type="text"
                                placeholder="height"
                                name="height"
                                value={ values.height }
                                onChange={ onHeightChange }
                                helperText="centimeters"
                                variant="filled"
                                size="normal"
                            />
                        </Col>
                    </Row>  
                </FormGroup>
                <Button onClick={handleSubmit}>Add Smurf</Button>
            </Form>
        </div >
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