import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { actions } from 'reducers/application';

export default function AddDevice() {
  const [hostname, setHostname] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // handle dupe checking here

    dispatch(
      actions.addDevice({
        hostname
      })
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add a Device</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Hostname</Form.Label>
            <Form.Control
              type="text"
              placeholder="example.local"
              value={hostname}
              onChange={(event) => setHostname(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={handleSubmit}>Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
