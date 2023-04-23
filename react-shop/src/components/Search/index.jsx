import React, { useRef, useState, useCallback } from 'react';
import debounce from "lodash.debounce"

import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from "./search.module.css"
import { useDispatch } from 'react-redux';

export const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const inputRef = useRef();

  const onClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value);
  }

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title/>
        <g data-name="Layer 2" id="Layer_2">
        <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"/>
        </g>
      </svg>
      <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} placeholder='Поиск' />
      {value && (
        <svg onClick={onClear} className={styles.clear} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="grid_system"/><g id="_icons"><path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/></g></svg>
      )}
    </div>
  )
}

export default Search;