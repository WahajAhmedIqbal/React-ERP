import React from "react";
import "./LoginContainer.scss";
import LeftImage from "../../images/signin-image.jpg";
import { Container, Grid } from "@material-ui/core";

const LoginContainer = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "pink", height: "100vh" }}
      >
        <Grid
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Grid
            item
            style={{
              backgroundColor: "white",
              width: "50%",
              height: "60%",
              textAlign: "center",
            }}
          >
            <img src={LeftImage} alt="" />
            <h1>Create an account</h1>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "yellow",
              height: "60%",
              width: "50%",
              textAlign: "center",
              justifyItems: "center",
            }}
          >
            <h1>Sign up</h1>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LoginContainer;
