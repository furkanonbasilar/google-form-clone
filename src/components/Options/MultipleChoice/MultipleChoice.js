import React from "react";
import "./MultipleChoice.scss";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addOptionMultChoice,
  removeOptionMultChoice,
  updOptionMultChoice,
  addOthersOptionMultChoice
} from "redux/form/action";

const MultipleChoice = ({
  addOptionMultChoice,
  data,
  isClicked,
  removeOptionMultChoice,
  updOptionMultChoice,
  addOthersOptionMultChoice
}) => {
  const renderOptions = () => {
    return data.map(item => {
      return (
        <Option
          data={item}
          isClicked={isClicked}
          removeQuestion={() => removeOptionMultChoice(item.id)}
          allOptionsLength={data.length}
          onTextChange={updOptionMultChoice}
        />
      );
    });
  };

  return (
    <>
      {renderOptions()}
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
            onClick={addOptionMultChoice}
            type="text"
            value=""
            className="add-option-input"
            placeholder="Seçenek ekle"
          />
          {!data.find(x => x.isDisabled) ? (
            <>
              <span>veya</span>
              <span
                className="optional-span"
                onClick={addOthersOptionMultChoice}
              >
                "Diğer" seçeneği ekle
              </span>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

const mapDispatchToProps = {
  addOptionMultChoice,
  removeOptionMultChoice,
  updOptionMultChoice,
  addOthersOptionMultChoice
};

export default connect(null, mapDispatchToProps)(MultipleChoice);

const Option = ({
  allOptionsLength,
  data,
  isClicked,
  onTextChange,
  removeQuestion
}) => {
  return (
    <div className="mltpl-choice">
      <Form.Check
        className="radio-button"
        custom
        inline
        name={"multiple-choice-" + data.id}
        label=""
        type={"radio"}
      />
      <Form.Control
        disabled={data.isDisabled}
        type="text"
        name={"soru-" + data.id}
        value={data.title}
        className="optional-input"
        onChange={event => onTextChange(data.id, event.target.value)}
      />
      {isClicked && allOptionsLength !== 1 ? (
        <i onClick={removeQuestion} className="fas fa-times"></i>
      ) : null}
    </div>
  );
};
