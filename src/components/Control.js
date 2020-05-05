import React, { useState, useCallback } from 'react';
import { Button, Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';

import { actions } from 'reducers/application';
import { getBrightness, getColor, getDevices } from 'selectors/application';

export default function Control() {
  const dispatch = useDispatch();
  const brightness = useSelector(getBrightness);
  const color = useSelector(getColor);
  const devices = useSelector(getDevices);
  const [recipientType, setRecipientType] = useState('all');
  const [recipients] = useState(devices.map((device) => device.hostname));

  const handleSend = useCallback(
    () =>
      dispatch(
        actions.controlDevice(recipients, {
          r: color.r,
          g: color.g,
          b: color.b,
          br: brightness
        })
      ),
    [dispatch, recipients, color, brightness]
  );

  const handleSetRecipientType = useCallback(
    (event) => setRecipientType(event.target.value),
    [setRecipientType]
  );

  const handleSetBrightness = useCallback(
    (event) => dispatch(actions.setBrightness(event.target.value)),
    [dispatch]
  );

  const handleSetColor = useCallback(
    (newColor) => dispatch(actions.setColor(newColor.rgb)),
    [dispatch]
  );

  let powerColorClass = 'success';

  if (brightness > 200) {
    powerColorClass = 'danger';
  } else if (brightness > 127) {
    powerColorClass = 'warning';
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Control your Devices</Card.Title>
        <Form>
          <Row>
            <Col md={8}>
              <Form.Group as={Col}>
                <Form.Label>Target(s)</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      inline
                      name="recipientType"
                      value="all"
                      label="All"
                      checked={recipientType === 'all'}
                      onChange={handleSetRecipientType}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      inline
                      name="recipientType"
                      value="some"
                      label="Some"
                      checked={recipientType === 'some'}
                      onChange={handleSetRecipientType}
                    />
                  </Col>
                </Row>
                {recipientType === 'some' ? (
                  <Form.Control as="select" multiple>
                    {devices.map((device) => (
                      <option key={device.hostname} value={device.hostname}>
                        {device.hostname}
                      </option>
                    ))}
                  </Form.Control>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Form.Label>Brightness</Form.Label>
                <InputGroup>
                  <Form.Control
                    className="hew-range"
                    type="range"
                    min="0"
                    max="255"
                    step="5"
                    value={brightness}
                    onChange={handleSetBrightness}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      className={`bg-${powerColorClass} text-dark`}
                    >
                      {' '}
                      {Math.floor((brightness / 255) * 100)}%
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {brightness > 127 && brightness <= 200 ? (
                  <span className="text-warning">
                    Caution! Use of the LEDs at this power level will reduce
                    their service life.
                  </span>
                ) : null}
                {brightness > 200 ? (
                  <span className="text-danger">
                    Warning! Do not look directly at LEDs at this power level!
                  </span>
                ) : null}
              </Form.Group>
            </Col>
            <Form.Group as={Col}>
              <Form.Label>Color</Form.Label>
              <SketchPicker color={color} onChangeComplete={handleSetColor} />
            </Form.Group>
          </Row>
          <Button variant="success" onClick={handleSend}>
            Send
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
