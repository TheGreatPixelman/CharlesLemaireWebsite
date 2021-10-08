import React from "react";
import { Container, Paper, Grid, ImageList, ImageListItem  } from '@material-ui/core'

import flogger from './Images/others/Aircraft_Flogger_Mk1.png'
import Cessna from './Images/others/aircraft.png'
import Forest from './Images/others/Forest_Batching_Optimisation.png'
import GPS from './Images/others/GPS.png'
import Knight from './Images/others/Knight.gif'
import Mazeltov from './Images/others/Mazeltov.gif'
import Missile from './Images/others/Missile_Simulation.png'
import uivr from './Images/others/ui_vr.png'
import tonkus from './Images/others/tonkusandheavy.png'
const itemData = 
[
    {img: flogger, title: "3D - Flogger Mk.1"},
    {img: Cessna, title: "3D - Cessna"},
    {img: Forest, title: "Unity - Optimisation"},
    {img: tonkus, title: "3D - Tonkus models"},
    {img: GPS, title: "3D - Textures"},
    {img: Knight, title: "Unity - 2D Animations"},
    {img: Mazeltov, title: "Unity - 2D Animations"},
    {img: Missile, title: "Unity - Missile Simulation"},
    {img: uivr, title: "Unity - VR custom Interactions"},

]

class OthersSection extends React.Component {
    render() {
      return (
          <Paper elevation={5} className="gameSection" >
              <Container>
              <Grid container spacing={2}>
                    <Grid item xs={12} className="description">
                    <h1>Other Projects</h1>
                    <ImageList  variant="masonry" className="imageList" cols={3} rowHeight={300}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <div class="bottom-left"><h2>{item.title}</h2></div>
                        </ImageListItem>
                    ))}
                    </ImageList>
                    <h1>and many more! but for now, see you later Alligator 🐊!</h1>
                    </Grid>
                </Grid>
              </Container>       
          </Paper>
      );
    }
}

export default OthersSection;