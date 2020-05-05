import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SendControl from 'components/SendControl';
import NetworkLog from 'components/NetworkLog';

export default function Control() {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>
            <FontAwesomeIcon icon="sliders-h" /> Control
          </h1>
        </Col>
      </Row>
      <SendControl />
      <NetworkLog />
    </Container>
  );
}
