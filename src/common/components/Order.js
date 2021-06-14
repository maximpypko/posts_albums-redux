  
import PropTypes from 'prop-types';

function Order({changesOrderItems}) {  
  return (
    <select
      className={`uk-select uk-width-small uk-margin-auto-left`}
      onChange={(e) => {
        changesOrderItems(e.target.value)
      }
      }>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  );
}

Order.propTypes = {
  changesOrderItems: PropTypes.func
}

export default Order;