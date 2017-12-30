import {convertToObj} from '../../assets/jsLibs/utils';

class PostsApi {
  constructor(data){
    this.data = data;
  }
  
  getPosts(){
    return convertToObj(this.data);
  }
}

export default PostsApi;