import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import ButtonLike from './ButtonLike';

import {
  getPosts,
  getAlbums,
  setPostsSearchValue,
  setAlbumsSearchValue,
  makesPageActive,
  changeCurrentPage,
  changeCurrentPageAlbums,
  changesOrderItems,
  changesOrderItemsAlbums,
  changeAmountVisibleItems,
  changeAmountVisibleItemsAlbums
} from "../../store/actions/index";

function Header({
  currentPagePosts,
  amountPosts,
  currentPageAlbum,
  amountAlbums,
  getAlbums,
  setPostsSearchValue,
  setAlbumsSearchValue,
  activeContentPage,
  getPosts,
  makesPageActive,
  changeCurrentPage,
  changesOrderItems,
  changesOrderItemsAlbums,
  changeAmountVisibleItems,
  changeAmountVisibleItemsAlbums,
  order,
  orderAlbums
}) {

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar='true'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={activeContentPage === "posts" ? 'uk-active' : ''}>
            <Link to='/'
              onClick={() => {
                setPostsSearchValue('')
                setAlbumsSearchValue('')
                changeCurrentPage(1);
                changeCurrentPageAlbums(1);
                makesPageActive("posts")
                changesOrderItems("asc")
                changesOrderItemsAlbums("asc")
                changeAmountVisibleItems(6)
                changeAmountVisibleItemsAlbums(6)
                getPosts(amountPosts, order, currentPagePosts)

              }}>Posts
            </Link>
          </li>
          <li className = {activeContentPage === "albums" ? 'uk-active' : ''}>
            <Link to="/albums"
              onClick={() => {
                setPostsSearchValue('')
                setAlbumsSearchValue('')
                changeCurrentPage(1)
                changeCurrentPageAlbums(1);
                makesPageActive("albums")
                changesOrderItems("asc")
                changesOrderItemsAlbums("asc")
                changeAmountVisibleItems(6)
                changeAmountVisibleItemsAlbums(6)
                getAlbums(amountAlbums, orderAlbums , currentPageAlbum)
               
              }}>
              Albums
            </Link>
          </li>
        </ul>
      </div>
      <ButtonLike/>
    </nav>
  );
}

Header.propTypes = {
  activeContentPage: PropTypes.string,
  currentPagePosts: PropTypes.number,
  amountPosts: PropTypes.number,
  currentPageAlbum: PropTypes.number,
  amountAlbums: PropTypes.number,
  getAlbums: PropTypes.func,
  setPostsSearchValue: PropTypes.func,
  setAlbumsSearchValue: PropTypes.func,
  getPosts: PropTypes.func,
  makesPageActive: PropTypes.func,
  changeCurrentPage: PropTypes.func,
  changesOrderItems: PropTypes.func,
  changesOrderItemsAlbums: PropTypes.func,
  changeAmountVisibleItems: PropTypes.func,
  changeAmountVisibleItemsAlbums: PropTypes.func,
  order: PropTypes.string,
  orderAlbums: PropTypes.string
}

const mapStateToProps = state => {
  return {
    activeContentPage: state.postsReducer.activeContentPage,
    currentPagePosts: state.postsReducer.filter.currentPage,
    currentPageAlbum: state.albumsReducer.filterAlbums.currentPage,
    amountPosts:state.postsReducer.filter.amountPosts,
    amountAlbums: state.albumsReducer.filterAlbums.amountAlbums,
    order:state.postsReducer.filter.order,
    orderAlbums: state.albumsReducer.filterAlbums.order,
  }
};

const mapDispatchToProps =  {
  getPosts,
  getAlbums,
  setPostsSearchValue,
  setAlbumsSearchValue,
  makesPageActive,
  changeCurrentPage,
  changeCurrentPageAlbums,
  changesOrderItems,
  changesOrderItemsAlbums,
  changeAmountVisibleItems,
  changeAmountVisibleItemsAlbums

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));