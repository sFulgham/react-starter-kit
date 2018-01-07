import AccountsApi from '../accounts';
import PostsApi from '../posts';
import {filterObjCollection} from '../../assets/jsLibs/utils';

class StateApi {
  constructor(payload){
    this.data = {
      accounts: {},
      posts: {},
      searchResult: ''
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    this.payload = payload;

    if(payload.accounts){
      let accountsApi = new AccountsApi(payload.accounts);
      this.data.accounts = accountsApi.getAccounts();
    }
    if(payload.posts){
      let postsApi = new PostsApi(payload.posts);
      this.data.posts = postsApi.getPosts();
    }   
  }

  getState(){
    return this.data;
  }

  getPostById(id){
    return this.data.posts[id].paragraph;
  }

  subscribe(cb){
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(id){
    delete this.subscriptions[id];
  }

  notifySubscribers(){
    Object.values(this.subscriptions).forEach(cb => cb());
  }

  changeState(newState){
    this.data[newState.change] = newState.state;
    this.notifySubscribers();
  }

  filterList(){
    var self = this;

    let accountMatches = self.payload.accounts.filter(account => {
      return filterObjCollection(account, self.data.searchResult);
    });

    let postsMatches = self.payload.posts.filter(post => {
      return filterObjCollection(post, self.data.searchResult);
    });

    let combinedMatches = accountMatches.concat(postsMatches);
    let matchIds = [];

    combinedMatches.forEach(match => matchIds.push(match.id));

    let uniqueMatches = matchIds.filter((match, idx, arr) => arr.indexOf(match) == idx);

    if(uniqueMatches.length == 0){
      return {};
    }

    let payload = [];
    uniqueMatches.forEach(match => payload.push(self.payload.accounts[match]));

    let accountsApi = new AccountsApi(payload);
    return accountsApi.getAccounts();
  }

  commitSearch(searchResult){
    this.data.searchResult = searchResult;
    let accounts = this.filterList();
    this.changeState({
      change: 'accounts',
      state: accounts
    });
  }

}

export default StateApi;