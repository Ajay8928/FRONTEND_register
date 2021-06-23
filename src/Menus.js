import React from 'react';
import { ListGroup,ListGroupItem} from 'reactstrap';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const Menus=()=>
{
    return(

        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/add-user" action>
                Register
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/all-users" action>
                Registered Users
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="#!" action>
                ABout us
            </Link>
        </ListGroup>
    );
}
export default Menus