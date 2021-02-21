import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core';

import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import { About } from '../../model/entities/about.entities';
import { getAbout } from '../../services/about.service';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    top: '-5px',
    marginLeft: '5px',
  },
  subTitle: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

const AboutComponent = (): JSX.Element => {
  const classes = useStyles();
  const [data, setData] = useState<About>();

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              <PersonTwoToneIcon fontSize="large" />
              <span className={classes.title}>About me</span>
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.subTitle}
                >
                  {data?.description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutComponent;
