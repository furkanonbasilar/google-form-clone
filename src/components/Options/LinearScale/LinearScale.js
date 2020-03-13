import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updLinearScale } from "redux/form/action";
import "./LinearScale.scss";

const LinearScale = ({ isClicked, data, updLinearScale }) => {
  const renderAnswerUI = () => {
    return [
      ...Array(data.minValue === 0 ? data.maxValue + 1 : data.maxValue)
    ].map((_, index) => (
      <div
        className={data.maxValue < 8 ? "radio-buttons" : "small-radio-buttons"}
      >
        <span>{data.minValue === 0 ? index : index + 1}</span>
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
            value={data.minValue}
            onChange={event =>
              updLinearScale("MIN_VALUE", parseInt(event.target.value))
            }
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
          </Form.Control>
          <span style={{ margin: "0 10px" }}>-</span>
          <Form.Control
            as="select"
            className="linear-select"
            onChange={event =>
              updLinearScale("MAX_VALUE", parseInt(event.target.value))
            }
            value={data.maxValue}
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
          <span>{data.minValue}</span>
          <Form.Control
            type="text"
            value={data.minTitle}
            placeholder="Etiket(isteğe bağlı)"
            onChange={event => updLinearScale("MIN_TITLE", event.target.value)}
          />
        </div>
        <div className="optional-label">
          <span>{data.maxValue}</span>
          <Form.Control
            type="text"
            value={data.maxTitle}
            placeholder="Etiket(isteğe bağlı)"
            onChange={event => updLinearScale("MAX_TITLE", event.target.value)}
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
          <p>{data.minTitle}</p>
          {renderAnswerUI()}
          <p>{data.maxTitle}</p>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  updLinearScale
};

export default connect(null, mapDispatchToProps)(LinearScale);
