import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const divStyle = {
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
      <LinearProgress color={{color:"rgb(255, 31, 98)", backgroundColor:"white", position:"absolute"}} variant="determinate" value={completed} />
    </div>
  );
}