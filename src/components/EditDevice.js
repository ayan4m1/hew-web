import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { actions } from 'reducers/application';

export default function EditDevice(props) {
  const { device } = props;
  const { hostname, passphrase: existingPassphrase } = device;

  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleDelete = useCallback(() => {
    dispatch(actions.removeDevice(hostname));
  }, [dispatch, hostname]);

  const handleEditToggle = useCallback(
    () => setEditing(!editing),
    [editing, setEditing]
  );

  const onValidate = (values) => {
    const { passphrase } = values;
    const errors = {};

    if (!passphrase) {
      errors.password = 'Passphrase is required.';
    } else if (passphrase.length < 8) {
      errors.password = 'Passphrase must be at least eight characters.';
    }

    return errors;
  };

  const onSubmit = useCallback(
    (values) => {
      dispatch(
        actions.editDevice(hostname, {
          ...device,
          passphrase: values.passphrase
        })
      );
      setEditing(false);
    },
    [device, dispatch, hostname, setEditing]
  );

  const initialValues = {
    passphrase: existingPassphrase
  };

  const editButtonVariant = editing ? 'outline-primary' : 'primary';

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{hostname}</Col>
            <Col className="text-right">
              <Button variant={editButtonVariant} onClick={handleEditToggle}>
                <FontAwesomeIcon icon="edit" />
              </Button>{' '}
              <Button variant="danger" onClick={handleDelete} title="Delete">
                <FontAwesomeIcon icon="trash" />
              </Button>
            </Col>
          </Row>
          {editing && (
            <Formik
              onSubmit={onSubmit}
              validate={onValidate}
              initialValues={initialValues}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <Form>
                  <Form.Group>
                    <Form.Label>Passphrase</Form.Label>
                    <Form.Control
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="passphrase"
                      type="text"
                      value={values.passphrase}
                    />
                  </Form.Group>
                  <Button variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon="save" />
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

EditDevice.propTypes = {
  device: PropTypes.shape({
    hostname: PropTypes.string.isRequired,
    passphrase: PropTypes.string.isRequired
  }).isRequired
};
