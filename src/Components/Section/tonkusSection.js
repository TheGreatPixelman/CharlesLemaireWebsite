import React from "react";
import { Container, Paper, Grid, Link  } from '@material-ui/core'
import pp from './Images/tonkus.png'

class TonkusSection extends React.Component {
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
                                <h1>Tonkus</h1>
                                <p>
                                    Tonkus is my first try at simulations in Unity3D, the concept of tonkus was to create a semi-realistic penetration system for tanks (similar to War Thunder). Using data tables from military books from the 50-80s i was able to recreate a quite refined damage model and shrapneling system. 
                                </p>
                                <Link href="#" className="description">
                                         <p>learn more...</p> 
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

export default TonkusSection;