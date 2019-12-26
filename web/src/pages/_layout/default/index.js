import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Headers from '~/components/Headers';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Headers />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
