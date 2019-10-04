// @flow
import React from 'react';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Input.css';

type Props = {
  id: string,
  inputClass?: string,
  label: string,
  name?: string,
  onInputChange: Function,
  options: Array<Object>,
  placeholder?: string,
  type?: string,
  value?: string,
};

function Input({
  id,
  inputClass,
  label,
  name,
  onInputChange,
  options,
  placeholder,
  type,
  value,
}: Props) {
  const inputClasses = classNames({
    inputClass: !!inputClass,
  });

  function renderOptions(opts) {
    return opts.map(opt => (
      <option key={opt.name} value={opt.value}>
        {opt.name}
      </option>
    ));
  }

  function inputType() {
    if (type === 'select') {
      return (
        <select id={id} defaultValue={value || 0} onChange={onInputChange}>
          <option value={0} disabled>
            Select
          </option>
          {options && renderOptions(options)}
        </select>
      );
    }
    return (
      <input
        className={`${s.form__group__input} ${inputClasses}`}
        defaultValue={value}
        id={id}
        name={name}
        onChange={onInputChange}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  return (
    <div className={`${s.form__group} ${s['form__group--input']}`}>
      <label htmlFor={id} className={s.form__group__label}>
        {label}
      </label>
      {inputType()}
    </div>
  );
}

Input.defaultProps = {
  inputClass: null,
  name: null,
  placeholder: null,
  type: 'text',
  value: null,
};

export default withStyles(s)(Input);
