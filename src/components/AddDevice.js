import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'reducers/application';
import { getDevices } from 'selectors/application';
import { Formik } from 'formik';

export default function AddDevice() {
  const devices = useSelector(getDevices);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values) => {
      const { hostname, passphrase } = values;

      dispatch(
        actions.addDevice({
          hostname: `${hostname}.local`,
          passphrase
        })
      );
    },
    [dispatch]
  );
  const onValidate = useCallback(
    (values) => {
      const { hostname, passphrase } = values;
      const errors = {};

      if (!hostname || hostname.trim() === '') {
        errors.hostname = 'Hostname is required.';
      }

      const existingDevice = devices.find(
        (device) => device.hostname === `${hostname}.local`
      );

      if (existingDevice) {
        errors.hostname = 'That device already exists.';
      }

      if (!passphrase) {
        errors.passphrase = 'Passphrase is required.';
      } else if (passphrase.length < 8) {
        errors.passphrase = 'Passphrase must be at least eight characters.';
      }

      return errors;
    },
    [devices]
  );
  const initialValues = {
    hostname: '',
    passphrase: ''
  };

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Add Device</Card.Title>
        <Formik
          initialValues={initialValues}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    isInvalid={errors.hostname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="hostname"
                    placeholder="hostname"
                    type="text"
                    value={values.hostname}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>.local</InputGroup.Text>
                  </InputGroup.Append>
                  {touched.hostname && errors.hostname && (
                    <Form.Control.Feedback type="invalid">
                      {errors.hostname}
                    </Form.Control.Feedback>
                  )}
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  isInvalid={errors.passphrase}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="passphrase"
                  type="text"
                  value={values.passphrase}
                />
                {touched.passphrase && errors.passphrase && (
                  <Form.Control.Feedback type="invalid">
                    {errors.passphrase}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Button onClick={handleSubmit} variant="success">
                <FontAwesomeIcon icon="plus-circle" /> Add
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
