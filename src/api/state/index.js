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

  commitSearch(searchResult, updateState){
    this.data.searchResult = searchResult;
    updateState(this.filterList());
  }
}

export default StateApi;