import React, {Component} from 'react';
import AccountList from '../accountList';
import SearchBar from '../search';

class App extends Component {
  constructor(props){
    super(props);

    this.state = this.props.store.getState();
    this.store = this.props.store;
  }

  updateState(filteredAccounts) {
    this.setState({
      accounts: filteredAccounts
    });
  }

  render() {
    return(
      <div>
        <SearchBar store={ this.store } onUpdate={this.updateState.bind(this)}/>
        <AccountList accounts={ this.state.accounts } store={ this.store }/>
      </div>
    );
  }
  
}

export default App;