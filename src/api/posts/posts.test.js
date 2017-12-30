import Faker from '../../assets/jsLibs/mock.data';
import PostsApi from './';

const faker = new Faker();
const postData = faker.getPosts();
const api = new PostsApi(postData);

describe('Posts api', () => {
  it('exposes posts as an object', () => {
    const post = api.getPosts();
    const testId = postData[0].id;
    const testWords = postData[0].words;

    expect(post).toHaveProperty(testId.toString());
    expect(post[testId].words).toBe(testWords);
  });
});