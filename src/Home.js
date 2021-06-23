import React,{useEffect} from 'react';
import { Jumbotron } from 'reactstrap';
import { CardBody,Card } from 'reactstrap';


const Home=()=>
{
    useEffect(()=>
    {
       document.title="||HOME||";
    },[])
    return(
        <div>
          <Jumbotron>
              <h1>This is Home Page</h1>
              <p>“Life is what happens when you’re busy making other plans.” – John Lennon. Get busy living or get …
“A friend is one that knows you as you are, understands where you have been, accepts what you …
“You only live once, but if you do it right, once is enough.” – Mae West. Would you like me to give …
“He that falls in love with himself will have no rivals.” – Benjamin Franklin. It is hard to fail, but it is …</p>
          </Jumbotron>
              
            
            </div>
    );
}
export default Home;