import React, { Component } from "react";
import "./MultipleChoice.scss";
import { Form } from "react-bootstrap";

export default class MultipleChoice extends Component {
  state = { arrIndexes: [] };

  componentDidMount = () => {
    this.addQuestion();
  };

  removeQuestionHandler = id => {
    const { arrIndexes } = this.state;
    console.log(arrIndexes.indexOf(id));
    this.setState({
      arrIndexes: [
        ...arrIndexes.slice(0, arrIndexes.indexOf(id)),
        ...arrIndexes.slice(arrIndexes.indexOf(id) + 1)
      ]
    });
  };

  addQuestion = () => {
    const { arrIndexes } = this.state;

    this.setState({
      arrIndexes: [...arrIndexes, arrIndexes.length]
    });
  };

  renderOptions = () => {
    const { arrIndexes } = this.state;
    const { isClicked } = this.props;

    return [...arrIndexes].map(item => {
      return (
        <MltpleAnswerUI
          id={item}
          isClicked={isClicked}
          removeQuestion={this.removeQuestionHandler}
          length={arrIndexes.length}
        />
      );
    });
  };

  render() {
    const { isClicked } = this.props;
    return (
      <>
        {this.renderOptions()}
        {isClicked ? ( //QuestionUI
          <div className="add-option">
            <Form.Check
              custom
              inline
              className="radio-button"
              name="multiple-choice-table1"
              label=""
              type={"radio"}
            />
            <Form.Control
              onClick={this.addQuestion}
              type="text"
              className="add-option-input"
              placeholder="Seçenek ekle"
            />
            <span>veya</span>
            <span className="optional-span">"Diğer" seçeneği ekle</span>
          </div>
        ) : null}
      </>
    );
  }
}

const MltpleAnswerUI = ({ isClicked, removeQuestion, id, length }) => {
  return (
    <div className="mltpl-choice">
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
        value={`${id + 1}. seçenek`}
        className="optional-input"
      />
      {isClicked && length !== 1 ? (
        <i onClick={() => removeQuestion(id)} className="fas fa-times"></i>
      ) : null}
    </div>
  );
};
