import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useCallback } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { getNetworkLog } from 'selectors/application';
import { actions } from 'reducers/application';

export default function NetworkLog() {
  const dispatch = useDispatch();
  const networkLog = useSelector(getNetworkLog);

  const handleClear = useCallback(() => dispatch(actions.clearNetworkLog()), [
    dispatch
  ]);

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={11}>Network Log</Col>
            <Col xs={1} className="text-right">
              <Button
                variant="warning"
                aria-label="Clear"
                title="Clear"
                onClick={handleClear}
              >
                <FontAwesomeIcon icon="eraser" />
              </Button>
            </Col>
          </Row>
        </Card.Title>
        <Container>
          {networkLog.length ? (
            networkLog.map((entry) => (
              <Row key={entry.timestamp}>
                <Col xs={4}>{format(entry.timestamp, 'mm-DD HH:mm:ss')}</Col>
                <Col xs={8}>{entry.message}</Col>
              </Row>
            ))
          ) : (
            <Row>
              <Col>No network log entries.</Col>
            </Row>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
}
