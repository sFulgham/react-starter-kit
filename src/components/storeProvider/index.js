import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  const wrapper = (props, {store}) => <Component {...props} store={props.store} />;
  wrapper.displayName = `${Component.name}Container`;
  wrapper.contextTypes = {
    store: PropTypes.object
  };

  return wrapper;
};

export default storeProvider;