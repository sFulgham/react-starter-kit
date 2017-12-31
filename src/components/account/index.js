import React from 'react';
import {formatDate} from '../../assets/jsLibs/utils';
import storeProvider from '../storeProvider';

const Account = (props) => {
  const {id, business, date, website, name} = props.account;
  const post = props.store.getPostById(id);

  return(
    <article className='account'>
      <h3>{ business }</h3>
      <h4>{ formatDate(date.toString()) }</h4>
      <div>
        <a href={ website }>{ name }</a>
      </div>
      <p>
          { post }
      </p>
    </article>
  );
};

export default storeProvider(Account);