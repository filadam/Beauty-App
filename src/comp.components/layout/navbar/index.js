import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './navbar.button/index'
import { Link } from 'react-router-dom'
import CompPageLoading from './navbar.loading/index'
import './style.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
    boxShadow:"0 0 0 0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

const styledLink = {
  color: "white",
  textDecoration: "none",
  padding: "30px",
}

const styledLogo = {
  marginTop:"10px",
  marginLeft:"180px",
  fontFamily: 'Galada',
  fontWeight: 'Bold',
  fontSize: '30px',
}

export default function CompNavbar() {
  const classes = useStyles();

  return (
    <div id="compbar" className={classes.root}>
      
      <AppBar position="fixed">
              <Toolbar >
          <SimpleMenu />
          <Typography style={styledLogo} variant="h6" className={classes.title} id="logo">
            <Link style={{color:"white", textDecoration:"none"}} to="/home">Beauty App</Link>
          </Typography>
          <Button ><Link style={{color:"white", textDecoration:"none"}} to="/signin">Zarejestruj się</Link></Button>
          <Button ><Link style={{color:"white", textDecoration:"none"}} to="/login">Zaloguj się</Link></Button>
        </Toolbar>
        <CompPageLoading position="fixed"/>
      </AppBar>
      
      {/* lower appbar */}
      <nav id="compnav" class="container-fluid">
        <Link style={styledLink} to="/about">Kalendarz</Link>
        <Link style={styledLink} to="/about">Kalendarz</Link>
        <Link style={styledLink} to="/about">Kalendarz</Link>
        <Link style={styledLink} to="/about">Kalendarz</Link>
        <Link style={styledLink} to="/about">Kalendarz</Link>
      </nav>
      
    </div>
  );
}