class ArticlesApi {
  constructor(data){
    this.data = data;
  }

  convertToObj(arr){
    return arr.reduce((acc,curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles(){
    return this.convertToObj(this.data.articles);
  }
}

export default ArticlesApi;