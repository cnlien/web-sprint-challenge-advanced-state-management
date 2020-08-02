import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

// LAYOUT
import { CircularProgress, Paper, Container } from '@material-ui/core';

// COMPONENTS

const SmurfsList = (props) => {

    console.log(props.smurfs)

    if(props.isFetching){
        return(
            <div>
                <CircularProgress />
                <h1>Fetching Data</h1>
                {props.fetchSmurfs()}
            </div>
        )
    }

    return(
        <div className="village">
            {props.smurfs.map( smurf => {
                return(
                    <Paper className="villageResident" key={smurf.id}>
                        <Container>
                            <h2 className="smurfName">{smurf.name}</h2>
                            <h4 className="smurfAge">Age: {smurf.age}</h4>
                            <h4 className="smurfHeight">Height: {smurf.height}</h4>
                        </Container>
                    </Paper>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfsList)