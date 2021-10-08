import React from "react";
import { Container, Paper, Grid, Link  } from '@material-ui/core'
import pp from './Images/synth.png'

class SynthySection extends React.Component {
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
                                <h1>Synthy</h1>
                                <p>
                                    Synthy is a musical VR experience that allows the player to create simple melodies with the help of a sequencer,
                                    this project was my first experience with the OpenXR and SteamVR systems. I had a lot of fun doing it!
                                </p>
                                <Link href="#" className="description">
                                         <p>Learn more...</p> 
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

export default SynthySection;