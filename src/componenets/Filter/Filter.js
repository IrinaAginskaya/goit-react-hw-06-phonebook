import React from 'react';
// import PropTypes from 'prop-types';
import { FilterFound } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const changeFilter = e => dispatch(actions.filterContact(e.target.value));

  return (
    <FilterFound>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </FilterFound>
  );
};

export default Filter;
