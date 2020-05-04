import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function EditDevice(props) {
  const { device } = props;
  const { hostname } = device;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Device {hostname}</Card.Title>
      </Card.Body>
    </Card>
  );
}

EditDevice.propTypes = {
  device: PropTypes.shape({
    hostname: PropTypes.string.isRequired
  }).isRequired
};
