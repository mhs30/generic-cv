import { makeStyles } from '@material-ui/core';
import React from 'react';
import AboutComponent from './components/about';
import EducationComponent from './components/education';
import HeaderComponent from './components/header';
import ProfessionalExperienceComponent from './components/professionalExperience';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10),
    },
    background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <HeaderComponent></HeaderComponent>
      <ProfessionalExperienceComponent></ProfessionalExperienceComponent>
      <EducationComponent></EducationComponent>
      <AboutComponent></AboutComponent>
    </div>
  );
}

export default App;
