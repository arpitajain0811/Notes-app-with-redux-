import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../HeaderComponent/Header';
import Home from '../Home/Home';
import BodyContainer from '../BodyContainer';
import SavedNotesContainer from '../SavedNotesContainer';
import { getNote } from '../../redux/actions';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('/notes').then(response => response.json()).then((responseArray) => {
      this.props.getNotes(responseArray);
      // console.log(responseArray);
    });
  }
  render() {
    // if (!this.props.page) {
    return (
      <div className="Board">
        <Header text="Start taking notes" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={BodyContainer} />
          <Route path="/saved" component={SavedNotesContainer} />
        </Switch>
      </div>
    );
    //   return (
    //     <div className="Board">
    //       <Header text="Start taking notes" />
    //       <Body />
    //       <Footer text="About Us" />
    //     </div>
    //   );
    // }
    // return (
    //   <div className="Board">
    //     <Header text="Saved Notes" />
    //     <SavedNotes />
    //     <FooterButton
    //       text="Create new Note"
    //     />
    //   </div>
    // );
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
App.propTypes = {
  // page: PropTypes.bool.isRequired,
  getNotes: PropTypes.func.isRequired,
};

