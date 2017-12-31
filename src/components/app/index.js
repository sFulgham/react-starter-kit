import React, {Component} from 'react';
import AccountList from '../accountList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = this.props.store.getState();
    this.store = this.props.store;
    /*this.accountActions = {
      lookupPosts: accountId => this.state.posts[accountId].paragraph
    };*/
  }

  render() {
    return(
      <AccountList accounts={ this.state.accounts } store={ this.store }/>
    );
  }
  
}

export default App;