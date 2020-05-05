import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  }, [dispatch, hostname]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{hostname}</Col>
            <Col xs={3}>
              <Button variant="danger" onClick={handleDelete}>
                <FontAwesomeIcon icon="trash" />
              </Button>
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
