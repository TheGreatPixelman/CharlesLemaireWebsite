import React from "react";
import { Container, Paper, Grid, Link  } from '@material-ui/core'
import pp from './Images/Gop-Tun.png'

class GunTopSection extends React.Component {
    render() {
      return (
          <Paper elevation={5} className="gameSection" >
              <Container>
              <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <a href="#"><img src={pp} href="#" className="gamePicture" /></a>
                    </Grid>
                    <Grid item xs={8}>
                        <Container>
                            <div elevation={5} className="description" >
                                <h1>Gun-Top</h1>
                                <p>
                                   Gun-Top is my current project where I want to emulate the feeling of being a 
                                   Top-Gun jet fighter pilot in a VR Experience. Working with my friend Zachary, 
                                   we want to create a near to truth flight experience while testing different 
                                   innovative techniques to reduce motion-sickness as much as possible during intense fights.
                                </p>
                                <Link href="#" className="description">
                                         <p>Video coming soon!</p> 
                                </Link>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
              </Container>       
          </Paper>
      );
    }
}

export default GunTopSection;