import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./style.css"
const divStyle = {
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    colorSecondary: 'linear-gradient(to right, #ffd6f4, #ffbcda, #ffa3ab, #ff946e, #ff941f);',
  },
  colorSecondary: {
    Color: '#b2dfdb',
  },
});

export default function CompPageLoading() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 100;
        }
        const diff = Math.random() * 100;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={divStyle} className={classes.root}>
      <LinearProgress id="comploader" style={{background: 'white'}} color="secondary" variant="determinate" value={completed} />
    </div>
  );
}