import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const QuestionOption = () => {
  const [selectedQuestion, questionHandler] = useState("");
  return (
    <Col className="col-4">
      <Form.Control
        value={selectedQuestion}
        as="select"
        id="select-question"
        onChange={e => questionHandler(event.target.value)}
      >
        <option value="multiple-choice">Multiple Choice</option>
        <option value="multiple-table">Multiple Choice Table</option>
        <option value="linear-scale">LinearScale</option>
      </Form.Control>
    </Col>
  );
};

export default QuestionOption;
