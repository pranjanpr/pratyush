import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <img className="imagee" src={require('./imagestime/tcg.png')} alt="" />
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              June20 - July20
            </Typography>
            <Typography>ML Internship</Typography>
            
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <img className="imagee" src={require('./imagestime/ecell.png')} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              May20 - Present
            </Typography>
            <Typography>SIP Secretary</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          <img className="imagee" src={require('./imagestime/fac.png')} alt="" />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              April20 - Present
            </Typography>
            <Typography>Fine Arts Club Secretary</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          <img className="imagee" src={require('./imagestime/iitklogo.png')} alt="" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
         
        </TimelineContent>
      </TimelineItem>
      
    
    </Timeline>
  );
}