import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './navbar.button/index'
import { Link } from 'react-router-dom'
import PageLoading from './navbar.loading/index'
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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed">
              <Toolbar >
          <SimpleMenu />
          <Typography style={styledLogo} variant="h6" className={classes.title} id="logo">
            <Link style={{color:"white", textDecoration:"none"}} to="/home">Beauty App</Link>
          </Typography>
          <Button ><Link style={{color:"white", textDecoration:"none"}} to="/signin">Zarejestruj się</Link></Button>
          <Button ><Link style={{color:"white", textDecoration:"none"}} to="/login">Zaloguj się</Link></Button>
        </Toolbar>
        <PageLoading position="fixed"/>
      </AppBar>
      
      {/* lower appbar */}
      <nav class="container-fluid">
        <Link style={styledLink} to="/about">Fryzjer</Link>
        <Link style={styledLink} to="/about">Barber</Link>
        <Link style={styledLink} to="/about">Paznokcie</Link>
        <Link style={styledLink} to="/about">Makijaż</Link>
        <Link style={styledLink} to="/about">Fryzjer</Link>
        <Link style={styledLink} to="/about">Barber</Link>
        <Link style={styledLink} to="/about">Paznokcie</Link>
        <Link style={styledLink} to="/about">Makijaż</Link>
      </nav>
      
    </div>
  );
}