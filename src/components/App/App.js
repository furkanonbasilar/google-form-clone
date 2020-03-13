import React, { Component } from "react";

import { connect } from "react-redux";

import "./App.scss";
import Header from "components/Header/Header";
import { addCard } from "redux/form/action";
import CustomCard from "components/CustomCard/CustomCard";

class App extends Component {
  componentDidMount = () => this.addNewCard();

  addNewCard = () => {
    const { addCard } = this.props;

    addCard();
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="App">
        <Header />
        {cards.map((c, index) => (
          <CustomCard data={c} index={index} />
        ))}
        <div className="button-wrapper">
          <i
            className="fas fa-plus-circle add-card-button"
            onClick={this.addNewCard}
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.form.cards };
};

const mapDispatchToProps = { addCard };

export default connect(mapStateToProps, mapDispatchToProps)(App);
