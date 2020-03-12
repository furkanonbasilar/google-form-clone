import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./LinearScale.scss";

const LinearScale = ({ isClicked }) => {
  // const [minumumForAnswerUI, setMinumumForAnswerUI] = useState(null);
  const [optnlFrst, setOptnlFrst] = useState("");
  const [optnlScnd, setOptnlScnd] = useState("");
  const [minumum, setMinumum] = useState(1);
  const [maximum, setMaximum] = useState(5);

  useEffect(() => {}, [minumum, maximum]);
  console.log(maximum);
  const renderAnswerUI = () => {
    return [...Array(minumum === 0 ? maximum + 1 : maximum)].map((_, index) => (
      <div className={maximum < 8 ? "radio-buttons" : "small-radio-buttons"}>
        <span>{minumum === 0 ? index : index + 1}</span>
        <Form.Check custom inline name="linear-scale" label="" type={"radio"} />
      </div>
    ));
  };

  const renderQstnUI = () => {
    return (
      <div>
        <div className="min-max-div">
          <Form.Control
            as="select"
            className="linear-select"
            value={minumum}
            onChange={event => setMinumum(parseInt(event.target.value))}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
          </Form.Control>
          <span style={{ margin: "0 10px" }}>-</span>
          <Form.Control
            as="select"
            className="linear-select"
            onChange={event => setMaximum(parseInt(event.target.value))}
            value={maximum}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Form.Control>
        </div>
        <div className="optional-label">
          <span>{minumum}</span>
          <Form.Control
            type="text"
            value={optnlFrst}
            placeholder="Etiket(isteğe bağlı)"
            onChange={event => setOptnlFrst(event.target.value)}
          />
        </div>
        <div className="optional-label">
          <span>{maximum}</span>
          <Form.Control
            type="text"
            value={optnlScnd}
            placeholder="Etiket(isteğe bağlı)"
            onChange={event => setOptnlScnd(event.target.value)}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      {isClicked ? (
        renderQstnUI()
      ) : (
        <div className="radio-div">
          <p>{optnlFrst}</p>
          {renderAnswerUI()}
          <p>{optnlScnd}</p>
        </div>
      )}
    </>
  );
};

export default LinearScale;
