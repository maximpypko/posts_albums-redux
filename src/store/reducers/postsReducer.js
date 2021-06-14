import {
  SET_POSTS,
  SET_POSTS_RANGE,
  SET_SEARCH_POSTS,
  ADD_LIKED_POST,
  DELETE_LIKED_POST,
  IDENTIFY_THE_SELECTED_POST,
  ADD_COMMENT_POST,
  SET_SEARCH_INPUT_VALUE,
  IS_TIME_REQUEST,
  ACTIVE_CONTENT_PAGE,
  CHANGE_CURRENT_PAGE,
  CHANGE_ORDER_ITEMS,
  CHANGE_AMOUNT_VISIBLE_ITEMS,
  PAGE_VIEW_SWITCH,
  RAISES_CURRENT_PAGE
} from "../actions/types";
  
const postInitialState = {
  activeContentPage: "posts",
  posts: [],
  likedPosts: [],
  xTotalCount: null,
  isHiddenElements: false,
  detailedPost: {},
  commentsPost: [],
  timeRequest: false,
  amountPaginationItems: null,
  pageActiveType: "grid",
  filter: {
    currentPage: 1,
    amountPosts: 6,
    search: "",
    order: "asc"
  }
}

const postsReducer = (state = postInitialState, { type, payload }) => {
  
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload.data,
        xTotalCount: payload.xTotalCount,
        amountPaginationItems: Math.ceil(payload.xTotalCount / state.filter.amountPosts),
      }
    case SET_SEARCH_POSTS:
      return {
        ...state,
        posts: payload.data,
        xTotalCount: payload.xTotalCount,
        amountPaginationItems: Math.ceil(payload.xTotalCount / state.filter.amountPosts),
      }
    case SET_POSTS_RANGE:
        return {
          ...state,
          posts: [ ...state.posts, ...payload],
      }
    case ADD_LIKED_POST:
      const likedPost = state.likedPosts.find(post => post.id === payload.id);
      return {
        ...state,
        likedPosts: likedPost ?
          state.likedPosts.filter(post => post.id !== payload.id) :
          [payload, ...state.likedPosts],
      }
    case DELETE_LIKED_POST:
      return {
        ...state,
        likedPosts: state.likedPosts.filter(post => post.id !== payload),
      }
    case IDENTIFY_THE_SELECTED_POST:
      return {
        ...state,
        detailedPost: payload
      }
    case ADD_COMMENT_POST:
      return {
        ...state,
        commentsPost: [payload, ...state.commentsPost]
      }
    case SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        filter: {...state.filter, search: payload}
      }
    case IS_TIME_REQUEST:
      return {
        ...state,
        timeRequest:payload,
      }
    case ACTIVE_CONTENT_PAGE:
      return {
        ...state,
        activeContentPage:payload,
      }
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          currentPage: payload,
        }
      }
    case CHANGE_ORDER_ITEMS:
        return {
          ...state,
          filter: {
            ...state.filter,
            order: payload,
          }
      }
    case CHANGE_AMOUNT_VISIBLE_ITEMS:
      return {
        ...state,
        filter: {
          ...state.filter,
          amountPosts: payload,
        }
      }
    case PAGE_VIEW_SWITCH:
      return {
        ...state,
        pageActiveType: payload,
      }
    case RAISES_CURRENT_PAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          currentPage: payload,
        }
      }
    default: return state;
  }
}

export default postsReducer;