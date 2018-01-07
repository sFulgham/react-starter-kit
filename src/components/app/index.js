import React, {Component} from 'react';
import AccountList from '../accountList';
import SearchBar from '../search';

class App extends Component {
  constructor(props){
    super(props);

    this.store = this.props.store;
    this.state = this.store.getState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange(){
    this.setState(this.store.getState());
  }

  componentDidMount(){
    this.subscriptionId = this.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount(){
    this.store.unsubscribe(this.subscriptionId);
  }

  render() {
    return(
      <div>
        <SearchBar store={ this.store }/>
        <AccountList accounts={ this.state.accounts } store={ this.store }/>
      </div>
    );
  }
  
}

export default App;