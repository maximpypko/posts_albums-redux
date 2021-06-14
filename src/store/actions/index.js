import url from "../../utils/api";
import axios from "axios";

import {
  SET_POSTS,
  SET_POSTS_RANGE,
  SET_SEARCH_POSTS,
  ADD_LIKED_POST,
  PAGE_VIEW_SWITCH,
  DELETE_LIKED_POST,
  IDENTIFY_THE_SELECTED_POST,
  ADD_COMMENT_POST,
  CHANGE_CURRENT_PAGE,
  ACTIVE_CONTENT_PAGE,
  CHANGE_ORDER_ITEMS,
  CHANGE_AMOUNT_VISIBLE_ITEMS,
  RAISES_CURRENT_PAGE,
  IS_TIME_REQUEST,
  SET_SEARCH_INPUT_VALUE,

  SET_ALBUMS,
  SET_ALBUMS_RANGE,
  ADD_LIKED_ALBUM,
  DELETE_LIKED_ALBUM,
  SET_SEARCH_INPUT_VALUE_ALBUMS,
  CHANGE_CURRENT_PAGE_ALBUMS,
  CHANGE_ORDER_ITEMS_ALBUMS,
  CHANGE_AMOUNT_VISIBLE_ITEMS_ALBUMS,
  PAGE_VIEW_SWITCH_ALBUMS,
  RAISES_CURRENT_PAGE_ALBUMS,
} from "./types";

// posts
export const getPosts = (limit, order = "asc", page = 1) => {

  return (dispatch) => {
    axios.get(`${url.postsURL}?_page=${page}&_limit=${+limit}&_sort=id&_order=${order}`)
      .then(response => dispatch({
          type: SET_POSTS, 
          payload: {
            data: response.data,
            xTotalCount: Number(response.headers["x-total-count"])
          }
          })
      )
      .catch(error=>console.log(error))
  }
};

export const getSearchPosts = (amount, text = "", order = "asc", page = 1) => {
  return (dispatch) => {
    axios.get(`${url.postsURL}?_page=${page}&_limit=${+amount}&q=${text}&_sort=id&_order=${order}`)
      .then(response => dispatch({
          type: SET_SEARCH_POSTS,
          payload: {
            data: response.data,
            xTotalCount: Number(response.headers["x-total-count"])
          }
        })
      )
      .catch(error => console.log(error))
  }
};

export const getPostsRange = (amount, order = "asc", page, inputValue = "") => {
  
  return (dispatch) => {
    axios.get(`${url.postsURL}?_page=${page}&_limit=${+amount}&q=${inputValue}&_sort=id&_order=${order}`)
      .then(response => dispatch({
          type: SET_POSTS_RANGE,
          payload: response.data,
        })
      )
      .catch(error => console.log(error))
  }
};

export const setPostsSearchValue = (value) => ({ type: SET_SEARCH_INPUT_VALUE, payload: value });
export const setPageActiveType = (bool) => ({ type: PAGE_VIEW_SWITCH, payload: bool });
export const addLikedPost = (element) => ({ type: ADD_LIKED_POST, payload: element });
export const deleteLikedPost = (id) => ({ type: DELETE_LIKED_POST, payload: id });
export const identifyTheSelectedPost = (element) => ({ type: IDENTIFY_THE_SELECTED_POST, payload: element });
export const addCommentPost = (comment) => ({ type: ADD_COMMENT_POST, payload: comment });
export const changeCurrentPage = (numberPage) => ({ type: CHANGE_CURRENT_PAGE, payload: numberPage });
export const makesPageActive = (idActivePage) => ({ type: ACTIVE_CONTENT_PAGE, payload: idActivePage });
export const changesOrderItems = (order) => ({ type: CHANGE_ORDER_ITEMS, payload: order });
export const changeAmountVisibleItems = (amount) => ({ type: CHANGE_AMOUNT_VISIBLE_ITEMS, payload: amount });
export const raisesCurrentPage = (number) => ({ type: RAISES_CURRENT_PAGE, payload: number });
export const isTimeRequest = (bool) => ({ type: IS_TIME_REQUEST, payload: bool });

//albums
export const getAlbums = (amount, order="asc", page = 1 ) => {
  return (dispatch) => {
    axios.get(`${url.albumsURL}?_page=${page}&_limit=${+amount}&_sort=id&_order=${order}`)
      .then(response => dispatch({
          type: SET_ALBUMS, 
          payload: {
            data: response.data,
            xTotalCount: Number(response.headers["x-total-count"]),
          }
        })
      )
      .catch(error=>console.log(error))
  }
};

export const getSearchAlbums = (amount, text = "", order = "asc", page = 1) => {
  
  return (dispatch) => {
    axios.get(`${url.albumsURL}?_page=${page}&_limit=${+amount}&q=${text}&_sort=id&_order=${order}`)
      .then(response => dispatch({
            type: SET_ALBUMS, 
            payload: {
              data: response.data,
              xTotalCount: Number(response.headers["x-total-count"]),
            }
          })
      )
      .catch(error=>console.log(error))
  }
}

export const getAlbumsRange = (page, amount, order = "asc", inputValue = "") => {

  return (dispatch) => {
    axios.get(`${url.albumsURL}?_page=${page}&_limit=${+amount}&q=${inputValue}&_sort=id&_order=${order}`)
      .then(response => 
        dispatch({
          type: SET_ALBUMS_RANGE,
          payload: response.data,
        })
      )
    .catch(error=>console.log(error))
  }
}

export const addLikedAlbum = (element) => ({ type: ADD_LIKED_ALBUM, payload: element });
export const deleteLikedAlbum = (id) => ({ type: DELETE_LIKED_ALBUM, payload: id });
export const setAlbumsSearchValue = (value) => ({
  type: SET_SEARCH_INPUT_VALUE_ALBUMS, payload: value
});
export const changeCurrentPageAlbums = (numberPage) => ({
  type: CHANGE_CURRENT_PAGE_ALBUMS, payload: numberPage
});
export const changesOrderItemsAlbums = (order) => ({
  type: CHANGE_ORDER_ITEMS_ALBUMS, payload: order
});
export const changeAmountVisibleItemsAlbums = (amount) => ({
  type: CHANGE_AMOUNT_VISIBLE_ITEMS_ALBUMS, payload: amount
});
export const setPageActiveTypeAlbums = (bool) => ({ type: PAGE_VIEW_SWITCH_ALBUMS, payload: bool });
export const raisesCurrentPageAlbums = (number) => ({
  type: RAISES_CURRENT_PAGE_ALBUMS, payload: number
});