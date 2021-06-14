import PropTypes from 'prop-types';

function NumberOfVisibleElements({ changeCurrentPage, changeAmountVisibleItems }) {
  
  return (
    <select
      className=' uk-select uk-width-small uk-margin-left'
      onChange={(e) => {
        changeCurrentPage(1)
        changeAmountVisibleItems(+e.target.value)
      }
      }>
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select> 
  );
}

NumberOfVisibleElements.propTypes = {
  changeCurrentPage: PropTypes.func,
  changeAmountVisibleItems: PropTypes.func,
}

export default NumberOfVisibleElements;