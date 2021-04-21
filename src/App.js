import {Switch, Route} from "react-router-dom"
import Venue from'./components/Venue'
import {createGlobalStyle} from 'styled-components';
import Countdown from './components/Countdown'
import Nav from './navbar/Nav'

const GlobalStlye = createGlobalStyle`
 
body {
  /* background: #070054; */
  /* background: linear-gradient(120deg, rgb(255, 255, 255) 0%, rgba(183, 176, 176, 1) 35%, rgb(255, 73, 242) 110%); */
  text-align: center;
  font-family: 'Red Hat Text';
  /* background-image: url("https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_1024/v1618265655/378-3784436_disney-castle-logo-png-disney-castle-logo-transparent_yiuqg3.png"); */
  // background-repeat: no-repeat;
  // background-position: center;
}

h1 {
  color: #ff49f2;
  font-size: 125px;
  background: -webkit-linear-gradient(#ff49f2, #070054);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: normal;
}

h2 {
  color: #ff49f2;
  font-size: 45px;
  background: -webkit-linear-gradient(#ff49f2, #070054);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-image{
  /* margin-top: 200px; */
  max-width: 300px;
  max-height: 400px;
  border-radius: 200px;
}
`

function App() {
  return (
    <div className="App">
      <GlobalStlye />
        <Nav />
      <Switch>
        <Route exact path ='/'>
          <h1>We're engaged!</h1>
          <h2>Save the date!</h2>
          <img className='main-image' src="https://res.cloudinary.com/acurunner79/image/upload/v1617227539/IMG_0209_rdvxy8.jpg" alt='Beth & Andy'/>
          <h2>April 30, 2022</h2>
        <Countdown />
        </Route>
        <Route exact path='/venue'>
          <Venue/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
