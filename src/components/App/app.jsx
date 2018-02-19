import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Body from '../BodyComponent/Body';
import FooterButton from '../FooterComponent/FooterButton';
import SavedNotes from '../SavedNotesComponent/SavedNotes';
import './App.css';

class App extends React.Component {
  render() {
    if (!this.props.page) {
      return (
        <div className="Board">
          <Header text="Start taking notes" />
          <Body />
          <Footer text="About Us" />
        </div>
      );
    }
    return (
      <div className="Board">
        <Header text="Saved Notes" />
        <SavedNotes />
        <FooterButton
          text="Create new Note"
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  page: state.page,
});
export default connect(mapStateToProps, null)(App);
App.propTypes = {
  page: PropTypes.string.isRequired,
};

