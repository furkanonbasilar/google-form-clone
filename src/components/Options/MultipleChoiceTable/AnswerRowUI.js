import React from "react";
import { Form } from "react-bootstrap";
import "./AnswerRowUI.scss";

const AnswerRowUI = ({ data, colCount }) => {
  return (
    <div className="mltpl-choice-table">
      <span>{data.title}</span>
      <div className="radio-button-div">
        {[...Array(colCount)].map(_ => (
          <Form.Check
            className="radio-button"
            custom
            inline
            name="multiple-choice-table1"
            label=""
            type={"radio"}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerRowUI;
