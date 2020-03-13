import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CustomCard.scss";
import MultipleChoice from "components/Options/MultipleChoice/MultipleChoice";
import MultipleChoiceTable from "components/Options/MultipleChoiceTable/MultipleChoiceTable";
import LinearScale from "components/Options/LinearScale/LinearScale";

import { connect } from "react-redux";
import {
  selectCard,
  updCardTitle,
  updCardType,
  removeCard,
  copyCard
} from "../../redux/form/action";

const CustomCard = ({
  data,
  index,
  selCardInd,
  selectCard,
  updCardTitle,
  updCardType,
  removeCard,
  copyCard
}) => {
  const isClicked = index === selCardInd;

  const renderChoice = () => {
    switch (data.type) {
      case "MULTI_CHOICE": {
        return <MultipleChoice isClicked={isClicked} data={data.options} />;
      }
      case "MULTI_TABLE": {
        return (
          <MultipleChoiceTable isClicked={isClicked} data={data.options} />
        );
      }
      case "LINEAR_SCALE": {
        return <LinearScale isClicked={isClicked} data={data.options[0]} />;
      }
    }
  };
  return (
    <div className={"card" + (isClicked ? " card-active" : "")}>
      <div className="card-wrapper" onClick={() => selectCard(data.id)}>
        {isClicked ? (
          <Form>
            <Form.Group as={Row}>
              <Col className="col-7">
                <Form.Control
                  type="text"
                  placeholder="Soru"
                  onChange={event => updCardTitle(event.target.value)}
                  value={data.title}
                  id="question-title"
                />
              </Col>
              <Col className="col-1"></Col>
              <Col className="col-4 question-col">
                <Form.Control
                  value={data.type}
                  as="select"
                  onChange={event => {
                    updCardType(event.target.value);
                  }}
                >
                  <option value="MULTI_CHOICE">Çoktan seçmeli</option>
                  <option value="MULTI_TABLE">Çoktan seçmeli tablosu</option>
                  <option value="LINEAR_SCALE">Doğrusal ölçek</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        ) : (
          <p>{data.title === "" ? "Soru" : data.title}</p>
        )}

        {renderChoice()}
      </div>
      {isClicked ? (
        <div className="card-buttons">
          <i className="far fa-copy" onClick={copyCard}></i>
          <i className="far fa-trash-alt" onClick={removeCard}></i>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selCardInd: state.form.selCardInd
  };
};

const mapDispatchToProps = {
  selectCard,
  updCardTitle,
  updCardType,
  removeCard,
  copyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);
