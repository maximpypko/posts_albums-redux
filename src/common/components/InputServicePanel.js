import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputServicePanel = ({setSearchValue, inputValue, timeRequest}) => {

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(inputValue)
  }, [inputValue])

  let timeout = null;
  
  const hendlerChange = (e) => {
    setValue(e.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => setSearchValue(e.target.value), 1000)
  };

  return (
    <form
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon='true'></span>
      {
        !timeRequest ||
        <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>
      }
      <input        
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        value={value}
        onChange={hendlerChange}
      />
    </form>      
  );
}

InputServicePanel.propTypes = {
  inputValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  timeRequest: PropTypes.bool
}

export default InputServicePanel;