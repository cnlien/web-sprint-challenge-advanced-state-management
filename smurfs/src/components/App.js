import React, { useEffect } from "react";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";

// STYLES
import { Container, Row, Col } from 'reactstrap'
import villageBackground from '../images/smurfs-village.png'

import { fetchSmurfs } from '../actions'

const App = () => {

    useEffect(() => {
      fetchSmurfs();
    });

    return (
      <Container className="App">
        <Row>
          <Col>
            <img className="villageLogo" src={villageBackground} alt="villageLogo" />
          </Col>

          <Col>
            <h1>Village Residents</h1>
            <SmurfsForm />
            <SmurfsList />
          </Col>
        </Row>
      </Container>
    );
}

export default App;
