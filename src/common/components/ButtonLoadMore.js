import PropTypes from 'prop-types';

function ButtonLoadMore({
  getSearch,
  inputValue,
  timeRequest,
  currentPage,
  amountVisibleItems,
  order,
  raisesCurrentPage,
  raisesCurrentPageAlbums,
  isTimeRequest,
  getPostsRange,
  getAlbumsRange,
  activeContentPage
}) {

  return (
       <div className="uk-margin">
        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            isTimeRequest(true)

            if (activeContentPage === "posts") {
              raisesCurrentPage(++currentPage)
              
              inputValue ?
              getSearch(amountVisibleItems, inputValue, order, currentPage):
              getPostsRange(amountVisibleItems, order, currentPage, inputValue)
            }
            if (activeContentPage === "albums") {
              raisesCurrentPageAlbums(++currentPage)
              inputValue ?
              getSearch(amountVisibleItems, inputValue, order, currentPage):
              getAlbumsRange(currentPage, amountVisibleItems, order)
            }
          }}
        >
          Load more
            {!timeRequest || <div className="uk-margin-small-left" uk-spinner="ratio: 0.6"></div>}
        </button>
      </div>
  );
}

ButtonLoadMore.propTypes = {
  currentPage: PropTypes.number,
  timeRequest: PropTypes.bool,
  isTimeRequest: PropTypes.func,
  getSearch: PropTypes.func,
  inputValue: PropTypes.string,
  amountVisibleItems: PropTypes.number,
  order: PropTypes.string,
  raisesCurrentPage: PropTypes.func,
  raisesCurrentPageAlbums: PropTypes.func,
  getPostsRange: PropTypes.func,
  getAlbumsRange: PropTypes.func,
  activeContentPage: PropTypes.string
}

export default ButtonLoadMore;