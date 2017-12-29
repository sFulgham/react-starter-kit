import {data} from './articles.mock.data';
import ArticlesApi from './articles.api';

const api = new ArticlesApi(data);

describe('Articles api', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const testId = data.articles[0].id;
    const testTitle = data.articles[0].title;

    expect(articles).toHaveProperty(testId);
    expect(articles[testId].title).toBe(testTitle);
  });
});