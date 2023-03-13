import Card from './components/Card';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Card } from "react-bootstrap";
import trialcard from './components/trialcard';



function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Greeting/>
      <div className='e-card-horizontal'>
        <Card
          name = {trialcard[0].name}
          img = {trialcard[0].img}
        />
        <Card
          name = {trialcard[1].name}
          img = {trialcard[1].img}
        />
        <Card
          name = {trialcard[2].name}
          img = {trialcard[2].img}
        />
        <Card
          name = {trialcard[3].name}
          img = {trialcard[3].img}
        />
        


      </div> 
    
    </div>
  );
}

export default Home;
