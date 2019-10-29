import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputField from './UI/InputField';
import MultiSelect from './UI/MultiSelect';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));



class Admin extends Component {

    handleChange() {

    }
    render() {

        return (

            <Container maxWidth="sm">
                <Paper className="paper">
                    <InputField
                        id="articalNo"
                        label="Artical No:"
                        onChange={this.handleChange}
                    />
                    <InputField
                        id="articalBrand"
                        label="Artical Brand:"
                        onChange={this.handleChange}
                    />


                    <InputField
                        id="articalName"
                        label="Artical Name:"
                        onChange={this.handleChange}
                    />
                    <InputField
                        id="articalprice"
                        label="Artical Price:"
                        onChange={this.handleChange}
                    />




                    <MultiSelect />
                    <div className='btnCenter'> 
                    <Button variant="contained" color="primary" style={{ justifyContent: 'center' }}>
                        Submit
      </Button> </div></Paper>
            </Container>

        )
    }
}


export default Admin;