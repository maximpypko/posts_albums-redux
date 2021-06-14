import PropTypes from 'prop-types';
import Form from "../components/InputServicePanel";
import Order from "../components/Order";
import NumberOfVisibleElements from "../components/NumberOfVisibleElements";
import PageViewSwitch from "../components/PageViewSwitch";

const ServicePanel = ({
  inputValue,
  setSearchValue,
  timeRequest,
  changesOrderItems,
  changeAmountVisibleItems,
  pageActiveType,
  setPageActiveType,
  changeCurrentPage,
  activeContentPage
}) => {
 
  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-margin-medium-bottom uk-flex">
          <Form          
            inputValue={inputValue}
            setSearchValue={setSearchValue}
            timeRequest={timeRequest}/>
          <Order changesOrderItems={changesOrderItems}/>
          <NumberOfVisibleElements
            changeCurrentPage={changeCurrentPage}
            changeAmountVisibleItems={changeAmountVisibleItems} />
          <PageViewSwitch
            pageActiveType={pageActiveType}
            setPageActiveType={setPageActiveType}
            activeContentPage={activeContentPage}/>
        </div>
      </div>
    </div> 
  );
}

ServicePanel.propTypes = {
  inputValue: PropTypes.string,
  pageActiveType: PropTypes.string,
  changesOrderItems: PropTypes.func,
  changeAmountVisibleItems: PropTypes.func,
  setPageActiveType: PropTypes.func,
  setSearchValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  changeCurrentPage: PropTypes.func,
  activeContentPage: PropTypes.string,
}

export default ServicePanel;