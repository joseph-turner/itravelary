import React from 'react';
import PropTypes from 'prop-types';


const Input = ({id, label, className, type = 'text', value, onChange, trailingText = '', isEditing = false, dataIndex}) => (
  <div className={className ? 'input ' + className : 'input'}>
    {label ? <label htmlFor={id} className="input__label">{label}</label> : ''}
    <input
      id={id}
      name={id}
      className={isEditing ? "input__field input__field--active" : "input__field"}
      readOnly={!isEditing}
      type={type}
      value={value}
      onChange={onChange}
      data-index={dataIndex}
    />{trailingText}
  </div>
);

const { func, number, oneOf, oneOfType, string, bool } = PropTypes;

Input.propTypes = {
  className: string,
  id: string.isRequired,
  isEditing: bool,
  label: string,
  onChange: func,
  trailingText: string,
  type: oneOf([
    'date',
    'email',
    'number',
    'password',
    'search',
    'text',
  ]),
  value: oneOfType([
    string,
    number
  ])
}

export default Input;
