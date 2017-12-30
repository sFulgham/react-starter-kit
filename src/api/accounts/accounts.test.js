import Faker from '../../assets/jsLibs/mock.data';
import AccountsApi from './';

const faker = new Faker();
const accountData = faker.getAccounts().accounts;
const api = new AccountsApi(accountData);

describe('Accounts api', () => {
  it('exposes acounts as an object', () => {
    const accounts = api.getAccounts();
    const testId = accountData[0].id;
    const testBusiness = accountData[0].business;

    expect(accounts).toHaveProperty(testId.toString());
    expect(accounts[testId].business).toBe(testBusiness);
  });
});