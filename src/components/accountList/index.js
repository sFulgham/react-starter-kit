import React from 'react';
import Account from '../account';

const AccountList = (props) => {
  return (
    <section>
      {
        Object.values(props.accounts).map(account => 
          <Account
            key={ account.id }
            account={ account }
            store={ props.store }
          />
        )
      }
    </section>
  );
};

export default AccountList;