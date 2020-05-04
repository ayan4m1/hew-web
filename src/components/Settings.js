import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import AddDevice from 'components/AddDevice';
import EditDevice from 'components/EditDevice';
import { getDevices } from 'selectors/application';

export default function Settings() {
  const devices = useSelector(getDevices);
  const hasDevices = Array.isArray(devices) && devices.length;
  const [showAddDevice, setShowAddDevice] = useState(false);

  const handleShow = () => setShowAddDevice(true);
  const handleHide = () => setShowAddDevice(false);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Settings</h1>
        </Col>
        <Col xs={3} className="text-center align-self-center">
          {showAddDevice ? (
            <Button onClick={handleHide}>Cancel add</Button>
          ) : (
            <Button onClick={handleShow}>Add device</Button>
          )}
        </Col>
      </Row>
      {showAddDevice ? (
        <Row>
          <Col>
            <AddDevice />
          </Col>
        </Row>
      ) : null}
      {hasDevices
        ? devices.map((device) => (
            <Row key={device.hostname}>
              <Col>
                <EditDevice device={device} />
              </Col>
            </Row>
          ))
        : null}
    </Container>
  );
}
