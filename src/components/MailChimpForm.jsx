import addToMailchimp from 'gatsby-plugin-mailchimp'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  inputField: {
    marginRight: theme.spacing(1),
    width: '40%',
    backgroundColor: '#000000',
    color: '#ffffff', 
  },
  input: {
    color: '#ffffff', 
  },
  button: {
    backgroundColor: '#FF5252', 
    '&:hover': {
      backgroundColor: '#FF6C6C', 
    },
  },
}));

export default function MailChimpForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await addToMailchimp(email);
    setResult(result.result);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.formContainer}>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={handleChange}
          className={classes.inputField}
          InputProps={{ className: classes.input }}
        />
        <Button
          variant="contained"
          className={classes.button}
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Sign Up</Typography>
        </Button>
      </Box>
      {result === "success" && (
        <Box textAlign="center" marginTop={2}>
          <Typography variant="subtitle1" color="primary">
            Thank you for subscribing!
          </Typography>
        </Box>
      )}
      {result === "error" && (
        <Box textAlign="center" marginTop={2}>
          <Typography variant="subtitle1" color="error">
            Something went wrong. Please try again later.
          </Typography>
        </Box>
      )}
    </form>
  );
}
