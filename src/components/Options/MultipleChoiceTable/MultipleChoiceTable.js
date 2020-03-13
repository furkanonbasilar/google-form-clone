import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./MultipleChoiceTable.scss";
import QstnColUI from "./QstnColUI";
import QstnRowUI from "./QstnRowUI";
import { connect } from "react-redux";
import { addOptMultTable } from "redux/form/action";
import AnswerRowUI from "./AnswerRowUI";
import AnswerColUI from "./AnswerColUI";

const MultipleChoiceTable = ({ addOptMultTable, isClicked, data }) => {
  const renderRows = () => {
    return data[0].row.map((rowQuest, index) => (
      <QstnRowUI
        index={index + 1}
        data={rowQuest}
        length={data[0].row.length}
      />
    ));
  };

  const renderCols = () => {
    return data[0].col.map(colQuest => {
      return <QstnColUI data={colQuest} length={data[0].col.length} />;
    });
  };

  return (
    <div>
      {isClicked ? (
        <Row>
          <Col>
            <h3 className="row-title">Satırlar</h3>
            {renderRows()}
            <Form.Control
              type="text"
              onClick={() => addOptMultTable("ROW")}
              name="satır"
              value="Satır ekle"
              className="optional-input"
            />
          </Col>
          <Col>
            <h3 className="col-title">Sütunlar</h3>
            {renderCols()}
            <Form.Control
              onClick={() => addOptMultTable("COL")}
              type="text"
              name="sütun"
              value="Sütun ekle"
              className="optional-input"
            />
          </Col>
        </Row>
      ) : (
        <>
          <AnswerColUI data={data[0].col} />
          {data[0].row.map(item => (
            <AnswerRowUI data={item} colCount={data[0].col.length} />
          ))}
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  addOptMultTable
};

export default connect(null, mapDispatchToProps)(MultipleChoiceTable);
