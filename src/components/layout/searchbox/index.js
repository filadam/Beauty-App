import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 40,
    background:"white",
    color:"white",
  },
  input: {
    marginLeft: 8,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    padding: 10,
  },
});

const divStyle = {
  background: "linear-gradient(to left, #efb5ff, #c8cdff, #aae0ff, #a4efff, #b7f9ff)",
  width:410,
  height: 50,
  borderRadius: "5px 5px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
export default function SearchBox() {
  const classes = useStyles();

  return (
    <div style={divStyle}>
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Szukaj Usług"
        inputProps={{ 'aria-label': 'Search Services' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
