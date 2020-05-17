import PropTypes from 'prop-types';
import React, { useCallback, Fragment } from 'react';
import { ProgressBar, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from 'reducers/application';
import { getStartColor, getEndColor } from 'selectors/application';

export default function GradientEditor({ color }) {
  const dispatch = useDispatch();
  const startColor = useSelector(getStartColor);
  const endColor = useSelector(getEndColor);

  const handleEditPointClick = useCallback(
    (value) => {
      if (value) {
        dispatch(actions.setStartColor(color));
      } else {
        dispatch(actions.setEndColor(color));
      }
    },
    [color, dispatch]
  );

  return (
    <Fragment>
      <ProgressBar name={name}>
        <ProgressBar
          style={{
            background: `linear-gradient(90deg, #${startColor}, #${endColor})`
          }}
          now={100}
        />
      </ProgressBar>
      <Row>
        <Col xs={6}>
          <Button onClick={() => handleEditPointClick(true)}>Start</Button>
        </Col>
        <Col className="text-right">
          <Button onClick={() => handleEditPointClick(false)}>End</Button>
        </Col>
      </Row>
    </Fragment>
  );
}

GradientEditor.propTypes = {
  color: PropTypes.string.isRequired
};
