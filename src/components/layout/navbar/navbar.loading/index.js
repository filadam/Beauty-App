import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./style.css"
const divStyle = {
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    colorSecondary: 'linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)',
  },
  colorSecondary: {
    Color: '#b2dfdb',
  },
});

export default function PageLoading() {
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
      <LinearProgress style={{background: 'white'}} color="secondary" variant="determinate" value={completed} />
    </div>
  );
}