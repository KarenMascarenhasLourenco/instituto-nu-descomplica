import React from  'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PinCard } from '../components/PinCard/PinCard';
export const Home = () => {
  return(
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <PinCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;