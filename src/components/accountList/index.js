import React from 'react';
import {formatDate} from '../../assets/jsLibs/utils';

const Account = (props) => {
  const {id, business, date, website, name} = props.account;
  const post = props.actions.lookupPosts(id);

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

const AccountList = (props) => {
  return (
    <section>
      {
        Object.values(props.accounts).map(account => 
          <Account
            key={ account.id }
            account={ account }
            actions={ props.accountActions }
          />
        )
      }
    </section>
  );
};

export default AccountList;