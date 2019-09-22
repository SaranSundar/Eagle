import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography, Button, Link} from '@material-ui/core';
import './MaterialAppBar.css'
import {StylesProvider} from '@material-ui/styles';
import {Link as RouterLink} from 'react-router-dom';
import {logoutUser} from "../../firebase";
import {withRouter} from 'react-router-dom'


function MaterialAppBar(props) {

    function callLogOut() {
        logoutUser(true, () => {
            props.history.push('/')
        });
    }

    return (
        <StylesProvider injectFirst>
            <CssBaseline/>
            <AppBar position="static" elevation={0} className="MaterialAppBar">
                <Toolbar className="Toolbar">
                    <Typography component={RouterLink} to="/" variant="h4" noWrap className="Toolbar-title">
                        Time MP
                    </Typography>
                    <nav>
                        <Link component={RouterLink} variant="button" color="inherit" to="/hours-log" className="Link">
                            Hours Log
                        </Link>
                        <Link component={RouterLink} variant="button" color="inherit" to="/projects" className="Link">
                            Projects
                        </Link>
                        <Link component={RouterLink} variant="button" color="inherit" to="/create-project"
                              className="Link">
                            Create Project
                        </Link>
                        <Link component={RouterLink} variant="button" color="inherit" to="/role-creator"
                              className="Link">
                            View Roles
                        </Link>
                        <Link component={RouterLink} variant="button" color="inherit" to="/employees" className="Link">
                            Employees
                        </Link>
                        <Link component={RouterLink} variant="button" color="inherit" to="/profile" className="Link">
                            Profile
                        </Link>
                    </nav>
                    <Button onClick={callLogOut} color="inherit" variant="outlined" className="Button">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </StylesProvider>
    );
}

export default withRouter(MaterialAppBar);