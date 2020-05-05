import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useCallback } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'reducers/application';
import { getDevices } from 'selectors/application';

export default function AddDevice() {
  const devices = useSelector(getDevices);
  const [hostname, setHostname] = useState('');
  const [duplicateHostname, setDuplicateHostname] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(
      actions.addDevice({
        hostname: `${hostname}.local`
      })
    );
  }, [dispatch, hostname]);

  const handleHostnameChange = useCallback(
    (event) => {
      const { value } = event.target;
      const existingDevice = devices.find(
        (device) => device.hostname === `${value}.local`
      );

      setDuplicateHostname(Boolean(existingDevice));
      setHostname(event.target.value);
    },
    [devices, setDuplicateHostname, setHostname]
  );

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Add Device</Card.Title>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="hostname"
            value={hostname}
            onChange={handleHostnameChange}
            isInvalid={duplicateHostname}
          />
          <InputGroup.Append>
            <InputGroup.Text>.local</InputGroup.Text>
            <Button
              variant="success"
              disabled={hostname === '' || duplicateHostname}
              onClick={handleSubmit}
            >
              <FontAwesomeIcon icon="plus-circle" />
            </Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid">
            A device with this hostname already exists.
          </Form.Control.Feedback>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}
