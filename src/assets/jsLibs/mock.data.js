import faker from 'faker';

class FakerMock {
  constructor(){
    this.card = faker.helpers.createCard();
  }

  getAccounts() {
    let accounts = this.card.accountHistory;

    accounts.forEach((item,idx) => {
      item.id = idx;
    });

    return accounts;
  }

  getPosts() {
    let posts = this.card.posts;

    posts.forEach((item,idx) => {
      item.id = idx;
    });

    return posts;
  }
}

export default FakerMock;