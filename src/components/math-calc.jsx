import React, { Component } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Latex from "react-latex";


class MathCalculator extends Component {
  state = {
  //alphaValue: "",
    astricValue:"",
  };
  //onClickAlpha = () => {
  //this.setState({ alphaValue:``});
  //};

  onClickAstric = () => {
    this.setState({ astricValue:``});
  }
  render() {
    //const alpha = <Latex>$\alpha$</Latex>;
    const astric = <Latex>$\times$</Latex>;

    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Type your Inputs here"
            variant="outlined"
            value={this.state.astricValue}
          />
        </Grid>
        <Grid item xs={4}>
          
          <Button
            variant="contained"
            style={{ textTransform: "lowercase" }}
            onClick={this.onClickAstric}
          >
            {astric}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default MathCalculator;