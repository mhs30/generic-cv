import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avatar from '../../assets/avatar.png';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
    },
  },
  content: {
    flexGrow: 1,
    paddingBottom: 0,
    width: 100,
    [theme.breakpoints.up('xs')]: {
      width: '90%',
    },
  },
  cover: {
    width: 200,
    height: 210,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  subTitle: {
    color: 'white',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  contact: {
    display: 'flex',
    padding: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      display: 'initial',
    },
  },
  contactText: {},
}));

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardMedia className={classes.cover} image={avatar} title="Avatar" />
          <CardContent className={classes.content}>
            <Typography variant="h4">
              {' '}
              <strong>Marina Moreno Herranz</strong>{' '}
            </Typography>
            <br />
            <Typography variant="h6" color="textSecondary">
              Because{' '}
              <i>“changing the world is connected with changing yourself”</i>,
              How can I help you?
            </Typography>
            <br />
            <List className={classes.contact}>
              <ListItem button>
                <ListItemIcon>
                  <PhoneIphone />
                </ListItemIcon>
                <ListItemText
                  className={classes.contactText}
                  primary="+34 653 043 532"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MailOutline />
                </ListItemIcon>
                <ListItemText
                  className={classes.contactText}
                  primary="marinamorenoherranz@gmail.com"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.subTitle}
        >
          Innovative and results focused HR professional and Certified Coach
          with more than ten years helping people, teams and companies in their
          transformation and change evolution.
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.subTitle}
        >
          My motto,{' '}
          <i>
            "You can’t keep doing the same thing every day and expect different
            results"
          </i>
          &nbsp; and for this reason, I’m always in a continuous and innovative
          process myself and my passion is helping people to explore and promote
          the best and happiest version of themselves.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
