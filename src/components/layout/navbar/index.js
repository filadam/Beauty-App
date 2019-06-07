import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './navbar.button/index'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import PageLoading from './navbar.loading/index'
import './style.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:"black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

const styledLink = {
  color: "rgb(170, 170, 170)",
  textDecoration: "none",
  padding: "30px",
}

const styledLogo = {
  marginTop:"10px",
  fontFamily: 'Galada',
  fontWeight: 'Bold',
  fontSize: '30px',
  // color: 'rgb(255, 31, 98)'
}

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar style={{color:"black"}} position="fixed">
      <PageLoading position="fixed"/>
        <Toolbar style={{boxShadow: "none"}}>
          <SimpleMenu style={{boxShadow: "none"}}/>
          <Typography style={styledLogo} variant="h6" className={classes.title} id="logo">
            Beauty App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* lower appbar */}
      <nav class="containerfluid">
        <Link style={styledLink} to="/about">Fryzjer</Link>
        <Link style={styledLink} to="/about">Barber</Link>
        <Link style={styledLink} to="/about">Paznokcie</Link>
        <Link style={styledLink} to="/about">Makijaż</Link>
      </nav>
    </div>
  );
}