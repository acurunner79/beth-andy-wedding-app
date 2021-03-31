import logo from './logo.svg';
import Venue from'./components/Venue'
import {createGlobalStyle} from 'styled-components';

const GlobalStlye = createGlobalStyle`
body {
  background: #070054;
  text-align: center;
}

h1 {
  color: #ff49f2;
}
`

function App() {
  return (
    <div className="App">
      <GlobalStlye />
      <h1>Home Page</h1>
      <Venue />
    </div>
  );
}

export default App;
