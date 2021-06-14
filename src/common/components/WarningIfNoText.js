import { useEffect } from "react";
import PropTypes from 'prop-types';

function WarningIfNoText({ isTimeRequest }) {

    useEffect(() => isTimeRequest(false))
    
    return (
        <span className="uk-text-danger uk-text-uppercase">Text not found</span>
    )
}

WarningIfNoText.propTypes = {
  isTimeRequest: PropTypes.func,
}

export default WarningIfNoText;