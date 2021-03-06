import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUp from "./SignUp.component";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 14),
    padding: theme.spacing(1, 8, 1, 8),
  },
}));

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, seterr] = useState();
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reached");
    setloading(true);
    try {
      console.log("Reached2");
      seterr("");

      let isErr = login(email, password);
      console.log("is error", isErr);
      if (!isErr) {
        console.log("Check Your Credentials Again!");
        return setloading(false);
      }
      history.push("/");
    } catch (er) {
      seterr(er.message);
    }
    console.log("Reached3");
    setloading(false);
  };
  console.log(email, password);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="success"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Dont have an account?Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignIn;
