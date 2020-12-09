import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./LoginContainer.scss";
import LeftImage from "../../images/signin-image.jpg";

const LoginContainer = () => {
  return (
    <React.Fragment>
      <Container
        className="main-container"
        maxWidth="xl"
        style={{ height: "100vh", backgroundColor: "pink" }}
      >
        <Grid container>
          <Grid xs={6} sm={6} md={6} item className="left-side">
            <img src={LeftImage} alt="" />
          </Grid>
          <Grid xs={6} sm={6} md={6} item className="right-side">
            <form className="form">this is form</form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LoginContainer;
