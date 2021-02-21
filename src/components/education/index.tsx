import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
} from '@material-ui/core';

import { Education } from '../../model/entities/education.entities';
import { getEducation } from '../../services/education.service';
import { Study } from '../../model/entities/study.entities';

import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import { Language } from '../../model/entities/language.entities';
import { About } from '../../model/entities/about.entities';
import { getAbout } from '../../services/about.service';
import { AboutList } from '../../model/entities/aboutList.entities';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    top: '-5px',
    marginLeft: '5px',
  },
}));

const EducationComponent = (): JSX.Element => {
  const classes = useStyles();
  const [data, setData] = useState<Education>();
  const [dataAbout, setDataAbout] = useState<About>();

  useEffect(() => {
    setDataAbout(getAbout());
  }, []);

  useEffect(() => {
    setData(getEducation());
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={8} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              <BookTwoToneIcon fontSize="large" />
              <span className={classes.title}>Education</span>
            </Typography>
            <Divider />
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <List>
                  {data?.studies
                    ? data.studies.map((item: Study) => {
                        return (
                          <ListItem key={item.key}>
                            <ListItemText
                              primary={item.title}
                              secondary={item.place}
                            />
                          </ListItem>
                        );
                      })
                    : ''}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              <PublicTwoToneIcon fontSize="large" />
              <span className={classes.title}>Languages</span>
            </Typography>
            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <List>
                  {data?.studies
                    ? data.languages.map((item: Language) => {
                        return (
                          <ListItem key={item.key}>
                            <ListItemText
                              primary={item.name}
                              secondary={item.level}
                            />
                          </ListItem>
                        );
                      })
                    : ''}
                </List>
              </Grid>
            </Grid>
            <Typography variant="h5">
              <AccessibilityNewTwoToneIcon fontSize="large" />
              <span className={classes.title}>Volunteer</span>
            </Typography>
            <Divider />
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <List>
                  {dataAbout?.list
                    ? dataAbout.list.map((item: AboutList) => {
                        return (
                          <ListItem key={item.key}>
                            <ListItemText
                              primary={item.label}
                              secondary={item.value}
                            />
                          </ListItem>
                        );
                      })
                    : ''}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EducationComponent;
