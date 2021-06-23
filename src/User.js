import React from 'react';
import{
    Card,CardBody,CardTitle,
    CardSubtitle,CardText,CardFooter,
    Button,Container} from 'reactstrap';

    const User=({user})=>
    {
        return(
            <Card>
                <CardBody className="text-center">
                    <CardSubtitle className="font-weight-bold">{user.name}</CardSubtitle>
                    <CardSubtitle>Age: {user.age}</CardSubtitle>
                    <CardSubtitle>City:{user.city}</CardSubtitle>
                    <CardSubtitle>Phone:{user.phone}</CardSubtitle>
                    <Container className="text-center">
                    <Button color="danger"style={{marginRight:"8px"}}>Delete</Button>
                    <Button color="warning">Update</Button>
                    </Container>
                </CardBody>
            </Card>

        );
    }
export default User;