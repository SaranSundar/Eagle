import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography, Button} from '@material-ui/core';
import './MaterialAppBar.css'
import {StylesProvider} from '@material-ui/styles';
import {Link as RouterLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


function MaterialAppBar(props) {

    function goToMaps() {
        props.history.push('/')
    }

    return (
        <StylesProvider injectFirst>
            <CssBaseline/>
            <AppBar position="static" elevation={0} className="MaterialAppBar">
                <Toolbar className="Toolbar">
                    <Typography component={RouterLink} to="/" variant="h4" noWrap className="Toolbar-title">
                        Eagle
                    </Typography>
                    <Button onClick={goToMaps} color="inherit" variant="outlined" className="Button">
                        Map
                    </Button>
                </Toolbar>
            </AppBar>
        </StylesProvider>
    );
}

export default withRouter(MaterialAppBar);