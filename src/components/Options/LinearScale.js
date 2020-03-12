import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./LinearScale.scss";

const LinearScale = ({ isClicked }) => {
  // const [minumumForAnswerUI, setMinumumForAnswerUI] = useState(null);
  const [maximumForAnswerUI, setMaximumForAnswerUI] = useState(5);

  const renderAnswerUI = () => {
    return [...Array(maximumForAnswerUI)].map((_, index) => (
      <div className="radio-buttons">
        <span>{index + 1}</span>
        <Form.Check
          custom
          inline
          name="linear-scale"
          label=""
          type={"radio"}
          id={`custom-inline-radio-2`}
        />
      </div>
    ));
  };
  return (
    <>
      {isClicked ? (
        <LinearScaleQuestionUI setMaximumForAnswerUI={setMaximumForAnswerUI} />
      ) : (
        <div className="radio-div">{renderAnswerUI()}</div>
      )}
    </>
  );
};

export default LinearScale;

const LinearScaleQuestionUI = ({ setMaximumForAnswerUI }) => {
  const [minumum, setMinumum] = useState(1);
  const [maximum, setMaximum] = useState(5);

  useEffect(() => {}, [minumum, maximum]);
  return (
    <div>
      <div className="min-max-div">
        <Form.Control
          as="select"
          className="linear-select"
          onChange={event => setMinumum(event.target.value)}
        >
          <option value={0}>0</option>
          <option selected value={1}>
            1
          </option>
        </Form.Control>
        <span style={{ margin: "0 10px" }}>-</span>
        <Form.Control
          as="select"
          className="linear-select"
          onChange={event => {
            setMaximum(event.target.value);
            setMaximumForAnswerUI(maximum);
          }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option selected value={5}>
            5
          </option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </Form.Control>
      </div>
      <div className="optional-label">
        <span>{minumum}</span>
        <Form.Control type="text" placeholder="Etiket(isteğe bağlı)" />
      </div>
      <div className="optional-label">
        <span>{maximum}</span>
        <Form.Control type="text" placeholder="Etiket(isteğe bağlı)" />
      </div>
    </div>
  );
};
