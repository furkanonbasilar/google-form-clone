import React, { Component } from "react";
import "./App.scss";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import CustomCard from "components/CustomCard/CustomCard";
import { changeFocusOnCard } from "redux/questions/action";

class App extends Component {
  state = {
    questions: []
  };
  componentDidMount() {
    this.addQuestion();
  }
  addQuestion = () => {
    const { questions } = this.state;
    this.setState({
      questions: [...questions, <CustomCard id={questions.length} />]
    });
  };
  render() {
    const { questions } = this.state;
    return (
      <div className="App">
        <Header />
        {questions}
        <button
          onClick={() => {
            this.addQuestion();
            this.props.changeFocusOnCard();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeFocusOnCard
};

export default connect(null, mapDispatchToProps)(App);
