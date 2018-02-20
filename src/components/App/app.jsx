import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Body from '../BodyComponent/Body';
import FooterButton from '../FooterComponent/FooterButton';
import SavedNotes from '../SavedNotesComponent/SavedNotes';
import { getNote } from '../../redux/actions';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    
    fetch('/notes').then((response)=>{
     return response.json();
    }).then((responseArray)=>{
        this.props.getNotes(responseArray);
        // console.log(responseArray);
    });
  }
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
const mapDispatchToProps = dispatch => ({
  getNotes: (responseArray) => {
    // console.log(responseArray);
    dispatch(getNote(responseArray));
  },
});
const mapStateToProps = state => ({
  page: state.page,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  page: PropTypes.bool.isRequired,
  getNote: PropTypes.func.isRequired,
};

