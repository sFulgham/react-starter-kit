import React, {Component} from 'react';
import Faker from '../../assets/jsLibs/mock.data';
import AccountsApi from '../../api/accounts';
import PostsApi from '../../api/posts';
import AccountList from '../accountList';

const faker = new Faker();
const accountsApi = new AccountsApi(faker.getAccounts());
const postsApi = new PostsApi(faker.getPosts());

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      accounts: accountsApi.getAccounts(),
      posts: postsApi.getPosts()
    };
    this.accountActions = {
      lookupPosts: accountId => this.state.posts[accountId].paragraph
    };
  }

  render() {
    let {accounts} = this.state;

    return(
      <AccountList 
        accounts={ accounts }
        accountActions={ this.accountActions } 
      />
    );
  }
  
}

export default App;