import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            {/* <url하고 component연결> */}
            <Nav />
            {/* Switch 없으면 path="/"를 무조건 거치고 감 */}
            <Switch>
                {/* exact없으면  path="/"에서 멈춤 */}
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Shop}/>
            </Switch>
        </div>
    </Router>
  );
}

const Home = () => {
    return <div>This is Home</div>
}
export default App;
