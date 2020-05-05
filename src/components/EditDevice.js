import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { actions } from 'reducers/application';

export default function EditDevice(props) {
  const { device } = props;
  const { hostname } = device;

  const dispatch = useDispatch();
  const handleDelete = useCallback(() => {
    dispatch(actions.removeDevice(hostname));
  }, [dispatch]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>Device {hostname}</Col>
            <Col xs={3}>
              <Button onClick={handleDelete}>Delete</Button>
            </Col>
          </Row>
        </Card.Title>
        <Row>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

EditDevice.propTypes = {
  device: PropTypes.shape({
    hostname: PropTypes.string.isRequired
  }).isRequired
};
