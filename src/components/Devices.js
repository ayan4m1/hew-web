import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import AddDevice from 'components/AddDevice';
import EditDevice from 'components/EditDevice';
import { getDevices } from 'selectors/application';

export default function Devices() {
  const devices = useSelector(getDevices);
  const hasDevices = Array.isArray(devices) && devices.length;

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>
            <FontAwesomeIcon icon="server" /> Devices
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddDevice />
        </Col>
      </Row>
      {hasDevices ? (
        <Row>
          {devices.map((device) => (
            <Col key={device.hostname} sm={4}>
              <EditDevice device={device} />
            </Col>
          ))}
        </Row>
      ) : null}
    </Container>
  );
}
