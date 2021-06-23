import logo from './logo.svg';
import './App.css';
import { Button ,Container,Row,Col} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Header  from './Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Menus from './Menus';
import Home from './Home';
import AllUsers from './AllUsers';
import AddUser from './AddUser';




function App() {

  return (
    <div>
    <Router>    
      <Container>
    <Header/>
      <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}>
          <Route path="/" component={Home} exact/>
          <Route path="/add-user" component={AddUser} exact/>
          <Route path="/all-users" component={AllUsers} exact/>
        </Col>
        </Row>
      </Container>
    </Router>

    </div>


  );
}

export default App;
