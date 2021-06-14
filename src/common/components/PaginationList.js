import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const PaginationList = ({
  getRequest,
  order,
  amountVisibleItems,
  getSearchRequest,
  amountPaginationItems,
  currentPage,
  changeCurrentPage,
  inputValue
}) => {

  const [line, setLine] = useState([]);

  useEffect(() => {
    
    setLine(() => {
      if (amountPaginationItems <= 5) {
        return [...Array(amountPaginationItems).keys()].map(num => num + 1);
      }
      if (currentPage >= 1 && currentPage <= 3) {
        return [1, 2, 3, 4, '...', amountPaginationItems];
      }
      if (currentPage >= 4 && currentPage < amountPaginationItems - 2) {
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', amountPaginationItems];
      }
      if (currentPage >= amountPaginationItems - 2) {
        return [1, '...', amountPaginationItems - 3, amountPaginationItems - 2, amountPaginationItems - 1, amountPaginationItems];
      }
    })
  }, [currentPage, amountPaginationItems]);

  const jumpOver = (index) => {
    if (index === 1) {
      changeCurrentPage(currentPage - 3);
    }
    if (index > 1){
      changeCurrentPage(currentPage + 3);
    }
  }
  
  return (
    <>
      <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin='true'>

        {
          currentPage === 1 ||
          <li>
          <a href="/" onClick={(e) => {
            e.preventDefault();
              changeCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
            
            inputValue ?
            getSearchRequest(amountVisibleItems, inputValue,  order, currentPage ) :
              getRequest(amountVisibleItems,order, --currentPage)
          }}>
            <span uk-pagination-previous='true'></span>
          </a>
          </li>
        }

        {line.map((element, index) => {
          return (
            <li key={index} className={currentPage === element ? 'uk-active' : ''}>
              <a href={element} onClick={(e) => {
                e.preventDefault();
                if (Number.isInteger(+e.target.innerText)) {
                  changeCurrentPage(element);
                  console.log(amountVisibleItems);
                  inputValue ?
                    getSearchRequest(amountVisibleItems, inputValue,  order, currentPage ) :
                    getRequest(amountVisibleItems, order,  element)
                } else {
                  jumpOver(index);
                }
              }}>{element}</a>
            </li>
          )
        })}

        {currentPage === amountPaginationItems || <li>
          <a href="/" onClick={(e) => {
            e.preventDefault()
            changeCurrentPage(currentPage === currentPage.length ? currentPage : currentPage + 1);
            inputValue ?
            getSearchRequest(amountVisibleItems, inputValue,  order, currentPage ) :
              getRequest(amountVisibleItems,order, currentPage)
          }}>
            <span uk-pagination-next='true'></span>
          </a>
        </li>}
      </ul>
    </>
  );
}

PaginationList.propTypes = {
  amountPaginationItems:PropTypes.number,
  currentPage:PropTypes.number,
  getRequest:PropTypes.func,
  order:PropTypes.string,
  amountVisibleItems:PropTypes.number,
  getSearchRequest:PropTypes.func,
  changeCurrentPage:PropTypes.func,
  inputValue:PropTypes.string
}

export default PaginationList