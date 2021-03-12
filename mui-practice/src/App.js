
import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(7),
  },
}));

function App() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(7);

  return (
    <>
      <Box>
    {/* There's nothing inside so this thing doesn't exist(?) */}
  </Box>
  <Container>
    <Typography>Hello, world! This is outside the Paper component</Typography>
    <Paper>
      <Typography>Hello, world!</Typography>
      <Typography>Hello, world!</Typography>
      <Typography>Hello, world!</Typography>
    </Paper>
    {/* <Paper>
      <Button variant="contained" color="primary">Here's the Button</Button>
      <Button variant="contained" color="secondary">Here's the Button</Button>
      <Button variant="contained" color="default">Here's the Button</Button>
    </Paper> */}
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="center"
      spacing={spacing}
    >
      <Paper>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
      </Paper>
      <Paper>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
      </Paper>
      <Paper>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
      </Paper>
      <Paper>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
      </Paper>
    </Grid>
  </Container>
  <Container>
      <ButtonGroup>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
        <Button variant="contained" color="primary">Here's the Button</Button>
      </ButtonGroup>
  </Container>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
  </>
      
    
  );
}

export default App;
