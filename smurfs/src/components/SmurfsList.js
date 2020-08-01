import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

// LAYOUT
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// STYLES

// COMPONENTS

const SmurfsList = (props) => {

    console.log(props.smurfs)

    if(props.isFetching){
        return(
            <Container>
                <CssBaseline />
                <CircularProgress />
                <h1>Fetching Data</h1>
                {props.fetchSmurfs()}
            </Container>
        )
    }

    return(
        <Container>
            <TableContainer component={Paper}>
                <h1>Smurfs</h1>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Height</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.smurfs.map( smurf => {
                            return(
                                <TableRow key={smurf.id}>
                                    <TableCell>{smurf.name}</TableCell>
                                    <TableCell>{smurf.age}</TableCell>
                                    <TableCell>{smurf.height}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
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