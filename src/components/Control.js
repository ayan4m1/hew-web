import React, { useState, useCallback } from 'react';
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  InputGroup
} from 'react-bootstrap';
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
  const [recipients, setRecipients] = useState([]);

  const handleSend = useCallback(() => {
    for (const recipient of recipients) {
      dispatch(
        actions.controlDevice(recipient, {
          r: color.r,
          g: color.g,
          b: color.b,
          br: brightness
        })
      );
    }
  }, [dispatch, recipients, color, brightness]);

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

  const handleUpdateRecipients = useCallback(
    (event) => {
      const selectedOptions = [...event.target.options]
        .filter((option) => option.selected)
        .map((option) => option.value);

      if (recipientType === 'all') {
        setRecipients(devices.map((device) => device.hostname));
      } else if (recipientType === 'some') {
        setRecipients(
          devices
            .filter((device) => selectedOptions.includes(device.hostname))
            .map((device) => device.hostname)
        );
      }
    },
    [recipientType, devices]
  );

  let powerColorClass = 'success';

  if (brightness >= 200) {
    powerColorClass = 'danger';
  } else if (brightness >= 160) {
    powerColorClass = 'warning';
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Control your Devices</Card.Title>
          <Form>
            <Row>
              <Col md={4}>
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
                    <Form.Control
                      as="select"
                      multiple
                      onChange={handleUpdateRecipients}
                    >
                      {devices.map((device) => (
                        <option key={device.hostname} value={device.hostname}>
                          {device.hostname}
                        </option>
                      ))}
                    </Form.Control>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col}>
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
                        {Math.floor((brightness / 255) * 100)}%
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {brightness >= 160 && brightness < 200 ? (
                    <span className="text-warning">
                      Prolonged use at this power level will reduce lifespan.
                    </span>
                  ) : null}
                  {brightness >= 200 ? (
                    <span className="text-danger">
                      Warning! Do not look directly at LEDs!
                    </span>
                  ) : null}
                </Form.Group>
              </Col>
              <Form.Group as={Col} md={4}>
                <Form.Label>Color</Form.Label>
                <SketchPicker color={color} onChangeComplete={handleSetColor} />
              </Form.Group>
              <Col md={4}>
                <Button
                  variant="success"
                  onClick={handleSend}
                  block
                  className="hew-send"
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
