import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CustomCard.scss";
import MultipleChoice from "components/Options/MultipleChoice";
import MultipleChoiceTable from "components/Options/MultipleChoiceTable/MultipleChoiceTable";
import LinearScale from "components/Options/LinearScale";

import { connect } from "react-redux";
import { addQstnId } from "../../redux/questions/action";

const CustomCard = ({ id, addQstnId, slctdQstnID }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [questionTitle, setQuestionTitle] = useState("");
  const [selQuestType, setSelQuestType] = useState("multiple-choice");

  const renderChoice = () => {
    switch (selQuestType) {
      case "multiple-choice": {
        return <MultipleChoice isClicked={isClicked} />;
      }
      case "multiple-choice-table": {
        return <MultipleChoiceTable isClicked={isClicked} />;
      }
      case "linear-scale": {
        return <LinearScale isClicked={isClicked} />;
      }
    }
  };

  useEffect(() => {
    setIsClicked(id === slctdQstnID);
  }, [slctdQstnID, isClicked]);

  return (
    <div
      className={"card" + (isClicked ? " card-active" : "")}
      onClick={() => {
        addQstnId(id);
      }}
    >
      {isClicked ? (
        <Form>
          <Form.Group as={Row}>
            <Col className="col-7">
              <Form.Control
                type="text"
                placeholder="Soru"
                onChange={event => setQuestionTitle(event.target.value)}
                value={questionTitle}
                id="question-title"
              />
            </Col>
            <Col className="col-1"></Col>
            <Col className="col-4 question-col">
              <Form.Control
                value={selQuestType}
                as="select"
                onChange={event => setSelQuestType(event.target.value)}
              >
                <option value="multiple-choice">Çoktan seçmeli</option>
                <option value="multiple-choice-table">
                  Çoktan seçmeli tablosu
                </option>
                <option value="linear-scale">Doğrusal ölçek</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      ) : (
        <p>{questionTitle === "" ? "Soru" : questionTitle}</p>
      )}

      {renderChoice()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    slctdQstnID: state.questions.slctdQstnID
  };
};

const mapDispatchToProps = {
  addQstnId
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);
