import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CardMedia,
} from '@material-ui/core';

import LocationOn from '@material-ui/icons/LocationOn';
import Business from '@material-ui/icons/Business';
import DateRange from '@material-ui/icons/DateRange';
import WorkTwoTone from '@material-ui/icons/WorkTwoTone';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { getProfessionalExperience } from '../../services/proffesionalExperience.service';
import { ProfessionalExperience } from '../../model/entities/professionalExperience.entities';
import { Duty } from '../../model/entities/duty.entities';
import { Constants } from '../../model/constants';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    top: '-5px',
    marginLeft: '5px',
  },
  dutiesList: {
    margin: theme.spacing(0),
    listStyle: 'circle',
  },
  companyLogo: {
    height: 20,
    width: 75,
  },
}));

const ProfessionalExperienceComponent = (): JSX.Element => {
  const classes = useStyles();
  const [data, setData] = useState<ProfessionalExperience[]>([]);

  useEffect(() => {
    setData(getProfessionalExperience());
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              <WorkTwoTone fontSize="large" />
              <span className={classes.title}>Professional Experience</span>
            </Typography>
            <Divider />
            {data && data.length > 0
              ? data.map((item: ProfessionalExperience, index: number) => {
                  return (
                    <div key={item.key}>
                      <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                          <List>
                            <ListItem button>
                              <Typography
                                variant="button"
                                className={classes.title}
                              >
                                <strong> {item.position}</strong>
                              </Typography>
                            </ListItem>
                            <ListItem button>
                              <ListItemIcon>
                                <Business />
                              </ListItemIcon>
                              {!!item.company.logo ? (
                                <CardMedia
                                  className={classes.companyLogo}
                                  image={Constants[item.company.logo]}
                                  title="Company logo"
                                />
                              ) : (
                                <ListItemText>
                                  <small>{item.company.name}</small>
                                </ListItemText>
                              )}
                            </ListItem>
                            <ListItem button>
                              <ListItemIcon>
                                <LocationOn />
                              </ListItemIcon>

                              <ListItemText>
                                <small>{item.location}</small>
                              </ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemIcon>
                                <DateRange />
                              </ListItemIcon>
                              <ListItemText>
                                <small>{item.dateRange}</small>
                              </ListItemText>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item md={8} xs={12}>
                          {item.duties && item.duties.length > 0
                            ? item.duties.map((duty: Duty, index: number) => {
                                return (
                                  <List key={duty.key}>
                                    <ListItem button>
                                      <ListItemIcon>
                                        {index === 0 && (
                                          <FormatListBulletedIcon />
                                        )}
                                      </ListItemIcon>
                                      <Typography
                                        variant="body2"
                                        className={classes.title}
                                      >
                                        {duty.value}
                                      </Typography>
                                    </ListItem>
                                  </List>
                                );
                              })
                            : ''}
                        </Grid>
                      </Grid>
                      {data.length - 1 !== index ? <Divider /> : ''}
                    </div>
                  );
                })
              : ''}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfessionalExperienceComponent;
