import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updOptColMultTable, removeOptColMultTable } from "redux/form/action";

import "./QstnColUI.scss";

const QstnColUI = ({
  data,
  length,
  updOptColMultTable,
  removeOptColMultTable
}) => {
  return (
    <div className="mltpl-tble-div">
      <Form.Check
        className="radio-button"
        custom
        inline
        name="multiple-choice-table1"
        label=""
        type={"radio"}
      />
      <Form.Control
        type="text"
        name="soru-1"
        value={data.title}
        onChange={event => updOptColMultTable(data.id, event.target.value)}
        className="optional-input"
      />
      {length !== 1 ? (
        <i
          onClick={() => removeOptColMultTable(data.id)}
          className="fas fa-times"
        ></i>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = {
  updOptColMultTable,
  removeOptColMultTable
};

export default connect(null, mapDispatchToProps)(QstnColUI);
