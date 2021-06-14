import { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Header from '../../common/containers/Header';
import AlbumItem from '../components/AlbumItem';
import ButtonLoadMore from '../../common/components/ButtonLoadMore';
import ServicePanel from '../../common/containers/ServicePanel';
import PaginationList from "../../common/components/PaginationList";
import WarningIfNoText from '../../common/components/WarningIfNoText';
import {
  getAlbums,
  getSearchAlbums,
  setAlbumsSearchValue,
  changesOrderItemsAlbums,
  changeAmountVisibleItemsAlbums,
  isTimeRequest,
  setPageActiveTypeAlbums,
  addLikedAlbum,
  raisesCurrentPageAlbums,
  getAlbumsRange,
  changeCurrentPageAlbums
} from "../../store/actions/index";

function AlbumsPage({
  albums,
  getAlbums,
  getSearchAlbums,
  setAlbumsSearchValue,
  timeRequest,
  isTimeRequest,
  changesOrderItemsAlbums,
  changeAmountVisibleItemsAlbums,
  likedAlbums,
  addLikedAlbum,
  amountPaginationItems,
  currentPage,
  amountVisibleItems,
  order,
  inputValue,
  raisesCurrentPageAlbums,
  getAlbumsRange,
  setPageActiveTypeAlbums,
  pageActiveType,
  activeContentPage,
  changeCurrentPageAlbums
}) {

  useEffect(() => {
    if (!inputValue) {
      isTimeRequest(true)
      getAlbums(amountVisibleItems, order);
    }
  }, [amountVisibleItems, getAlbums, inputValue, isTimeRequest, order])

  useEffect(() => {
    if (inputValue.length) {
      isTimeRequest(true)
      getSearchAlbums(amountVisibleItems, inputValue, order, currentPage);
    }
    
  }, [amountVisibleItems, inputValue, isTimeRequest, order, currentPage, getSearchAlbums])

  return (
      <main className="uk-main">
      <Header/>
      <ServicePanel
        inputValue={inputValue}
        setSearchValue={setAlbumsSearchValue}
        timeRequest={timeRequest}
        changesOrderItems={changesOrderItemsAlbums}
        changeAmountVisibleItems={changeAmountVisibleItemsAlbums}
        setPageActiveType={setPageActiveTypeAlbums}
        pageActiveType={pageActiveType}
        activeContentPage={activeContentPage}
        changeCurrentPage={changeCurrentPageAlbums}/>
          <div className="uk-container uk-cover-container">  
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
              {
                albums.length ? 
                albums.map(element => {
                  return <AlbumItem
                    key={element.id}
                    album={element}
                    likedAlbums={likedAlbums}
                    addLikedAlbum={addLikedAlbum}
                    isTimeRequest={isTimeRequest}
                    /> 
                }) :
                  <WarningIfNoText isTimeRequest={isTimeRequest}/>
              }            
            </div>
          </div>
        
      {
        !albums.length ||
              amountPaginationItems === currentPage ||
        <ButtonLoadMore
          timeRequest={timeRequest}
          currentPage={currentPage}
          amountVisibleItems={amountVisibleItems}
          order={order}
          activeContentPage={activeContentPage}
          raisesCurrentPageAlbums={raisesCurrentPageAlbums}
          isTimeRequest={isTimeRequest}
          getAlbumsRange={getAlbumsRange}
          inputValue={inputValue}
          getSearch={getSearchAlbums}/>
      }
      {
        !albums.length ||
          <PaginationList
          getRequest={getAlbums}
          getRangeRequest={getAlbumsRange}
          getSearchRequest={getSearchAlbums}
          changeCurrentPage={changeCurrentPageAlbums}
          amountPaginationItems={amountPaginationItems}
          amountVisibleItems={amountVisibleItems}
          currentPage={currentPage}
          inputValue={inputValue}
          order={order}/>
      }
      </main>
  )
}

AlbumsPage.propTypes = {
  albums: PropTypes.array,
  amountPaginationItems: PropTypes.number,
  currentPage: PropTypes.number,
  getAlbums: PropTypes.func,
  getSearchAlbums: PropTypes.func,
  setAlbumsSearchValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  isTimeRequest: PropTypes.func,
  changesOrderItemsAlbums: PropTypes.func,
  changeAmountVisibleItemsAlbums: PropTypes.func,
  likedAlbums: PropTypes.array,
  addLikedAlbum: PropTypes.func,
  amountVisibleItems: PropTypes.number,
  order: PropTypes.string,
  inputValue: PropTypes.string,
  raisesCurrentPageAlbums: PropTypes.func,
  getAlbumsRange: PropTypes.func,
  setPageActiveTypeAlbums: PropTypes.func,
  pageActiveType: PropTypes.string,
  activeContentPage: PropTypes.string,
  changeCurrentPageAlbums: PropTypes.func
}

const mapStateToProps = state => {
  return {
    albums: state.albumsReducer.albums,
    timeRequest:state.albumsReducer.timeRequest,
    amountPaginationItems: state.albumsReducer.amountPaginationItems,
    currentPage: state.albumsReducer.filterAlbums.currentPage,
    amountVisibleItems: state.albumsReducer.filterAlbums.amountAlbums,
    order: state.albumsReducer.filterAlbums.order,
    inputValue: state.albumsReducer.filterAlbums.search,
    pageActiveType: state.albumsReducer.pageActiveType,
    likedAlbums: state.albumsReducer.likedAlbums,
    activeContentPage:state.postsReducer.activeContentPage
  }
};

const mapDispatchToProps = {
  getAlbums,
  getAlbumsRange,
  getSearchAlbums,
  setAlbumsSearchValue,
  changesOrderItemsAlbums,
  changeAmountVisibleItemsAlbums,
  setPageActiveTypeAlbums,
  isTimeRequest,
  raisesCurrentPageAlbums,
  addLikedAlbum,
  changeCurrentPageAlbums,
}
   
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);