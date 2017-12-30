import AccountsApi from '../accounts';
import PostsApi from '../posts';

class StateApi {
  constructor(payload){
    this.data = {
      accounts: {},
      posts: {}
    };

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
}

export default StateApi;