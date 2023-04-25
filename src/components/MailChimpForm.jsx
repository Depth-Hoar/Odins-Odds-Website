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
  },
  inputField: {
    marginRight: theme.spacing(1),
    width: '40%',
    backgroundColor: '#000000',
    color: '#ffffff', // Add this line to change the text color
  },
  input: {
    color: '#ffffff', // Add this line to change the text color
  },
  button: {
    backgroundColor: '#FF5252', // Replace with your desired color
    '&:hover': {
      backgroundColor: '#FF6C6C', // Replace with your desired hover color
    },
  },
}));

// const textFieldStyle = {
//   width: '40%', // You can change the width to any value you want
//   backgroundColor: '#000000', // Change the background color to your desired color
//   color: '#ffffff', // Change the background color to your desired color
// };

  export default function MailChimpForm() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("thank you");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let result = await addToMailchimp(email);
      setResult(result);
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
              InputProps={{className: classes.input}}
          />
          <Button variant="contained" className={classes.button} label="Submit" type="submit">
            <Typography variant="button">Sign Up</Typography>
          </Button>
        </Box>
      </form>
    );
  }

