import './App.css';
import { Button, makeStyles, ThemeProvider, createTheme, Container } from '@material-ui/core'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import TonkusSection from './Components/Section/tonkusSection';
import SynthySection from './Components/Section/SynthySection';
import GunTopSection from './Components/Section/GunTopSection';
import OthersSection from './Components/Section/OtherProjects';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8ad15b',
      main: '#6dc633', //buttons and such
      dark: '#4c8a23',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ef9943',
      main: '#EB8014',
      dark: '#a4590e',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Header>
          
        </Header>
        <Container className="ProjectsSection">
          <Section>
          </Section>

          <h1 className="section-title">Projects</h1>
          <TonkusSection>
          </TonkusSection>
          <SynthySection>
          </SynthySection>
          <GunTopSection>
          </GunTopSection>
          <OthersSection>

          </OthersSection>
        </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
