import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updOptRowMultTable, removeOptRowMultTable } from "redux/form/action";
import "./QstnRowUI.scss";

const QstnRowUI = ({
  index,
  data,
  length,
  updOptRowMultTable,
  removeOptRowMultTable
}) => {
  return (
    <div className="question-row-div">
      <span>{`${index}.`}</span>
      <Form.Control
        type="text"
        name="soru-1"
        value={data.title}
        onChange={event => updOptRowMultTable(data.id, event.target.value)}
        className="optional-input"
      />
      {length !== 1 ? (
        <i
          onClick={() => removeOptRowMultTable(data.id)}
          className="fas fa-times"
        ></i>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = {
  updOptRowMultTable,
  removeOptRowMultTable
};

export default connect(null, mapDispatchToProps)(QstnRowUI);
