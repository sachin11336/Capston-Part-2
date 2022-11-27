<<<<<<< HEAD
import FormControl from "@material-ui/core/FormControl";
import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Home from '../components/home/Home';
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import xhrService from "../Auth/xhr.service";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [firstname, setfirstName] = React.useState("mentee");
  const [lastname, setlastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitAction, setSubmitAction] = React.useState(false);

  useEffect(() => {
    async function register() {
      if (!submitAction) {
        return;
      }

      let data = {};
      try {
        ({ data } = await xhrService.post("http://localhost:8000/users", {
          firstname,
          lastname,
          email,
          contactnum: number,
          password,
        }));
        toast.success(`User Signed Up, ${data.name}`);
        props.history.push("/login");
      } catch (ex) {
        toast.error(ex.message);
      } finally {
        setSubmitAction(false);
      }
    }

    register();
  }, [submitAction]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAction(true);
  };

  return (
    <div>
    {/* <Home id='home' /> */}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="confirmpassword"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contactnumber"
                label="Contact Number"
                type="contactnumber"
                id="contactnumber"
                autoComplete="Contact-Number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  </div>
  );
}
=======
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Nav } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
const SignUp = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Contact, setContact] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, ConfirmPassword, Contact);
    handleClose();
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="ConfirmPassword"
        variant="filled"
        type="ConfirmPassword"
        required
        value={ConfirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <TextField
        label="Contact"
        variant="filled"
        type="Contact"
        required
        value={Contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          SignUp
        </Button>
        <Nav.Link href="/login" style={{ color: "blue" }}>
          Already have an account SignUp
        </Nav.Link>
      </div>
    </form>
  );
};
export default SignUp;