import React from "react";
import { Container, Paper, Grid } from '@material-ui/core'
import pp from './Images/profilePic.jpg'

class Section extends React.Component {
    render() {
      return (
          <Paper elevation={5} className="AboutMe" >
              <Container>
              <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img src={pp} className="profilePicture" />
                    </Grid>
                    <Grid item xs={9}>
                        <Container>
                            <div elevation={5} className="description" >
                                <p>Hey there! I'm Charles, a soon to be of ÉTS in software engineering! 
                                    I enjoy working with different Modeling and game engines softwares to create simulations and 
                                    interactions between different systems. My favorite software to date is Unity3D where i make most 
                                    of my games and projects. I hope that one day I'll have the ability to release my first game 
                                    and start my own studio! </p>
                                <p>
                                    Very Spicy 🌶️!
                                </p>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
              </Container>       
          </Paper>
      );
    }
}

export default Section;