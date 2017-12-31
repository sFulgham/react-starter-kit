import React from 'react';
import AccountList from './';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const testProps = {};
Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
  testProps.accounts = {
    '1': {id: '1', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'},
    '2': {id: '2', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'},
    '3': {id: '3', business: 'test', date: new Date().toString(), website: 'test.com', name: 'test'}
  };
});

describe('AccountList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AccountList {...testProps} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('AccountContainer').length).toBe(3);
    console.log(wrapper); //eslint-disable-line no-console
  });
});