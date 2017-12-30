import React from 'react';
import AccountList from './';
import renderer from 'react-test-renderer';

const testProps = {};

beforeEach(() => {
  testProps.accounts = {
    '1': {id: '1', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'},
    '2': {id: '2', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'},
    '3': {id: '3', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'}
  };

  testProps.accountActions = {
    lookupPosts: jest.fn(() => ('test paragraph'))
  };
});

describe('AccountList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AccountList {...testProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(3);
    console.log(tree); //eslint-disable-line no-console
  });
});