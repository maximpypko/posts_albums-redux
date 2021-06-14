import {
  SET_ALBUMS,
  SET_ALBUMS_RANGE,
  ADD_LIKED_ALBUM,
  DELETE_LIKED_ALBUM,
  SET_SEARCH_INPUT_VALUE_ALBUMS,
  CHANGE_CURRENT_PAGE_ALBUMS,
  CHANGE_ORDER_ITEMS_ALBUMS,
  CHANGE_AMOUNT_VISIBLE_ITEMS_ALBUMS,
  PAGE_VIEW_SWITCH_ALBUMS,
  RAISES_CURRENT_PAGE_ALBUMS
} from "../actions/types";
  
const albumInitialState = {
  albums: [],
  likedAlbums: [],
  isHiddenElements: false,
  timeRequest: false,
  xTotalCount: null,
  amountPaginationItems: null,
  pageActiveType:"grid",
  filterAlbums: {
    currentPage: 1,
    amountAlbums: 6,
    search: "",
    order: "asc",
  }
}

const albumsReducer = (state = albumInitialState, { type, payload }) => {

  switch (type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: payload.data,
        xTotalCount: payload.xTotalCount,
        amountPaginationItems: Math.ceil(payload.xTotalCount / state.filterAlbums.amountAlbums),
      }
    case SET_ALBUMS_RANGE:
      return {
        ...state,
        albums: [...state.albums, ...payload]
      }
    case ADD_LIKED_ALBUM:
      const likedAlbums = state.likedAlbums.find(album => album.id === payload.id);
      return {
        ...state,
        likedAlbums: likedAlbums ?
          state.likedAlbums.filter(album => album.id !== payload.id) :
          [payload, ...state.likedAlbums]
      }
    case DELETE_LIKED_ALBUM:
        return {
          ...state,
          likedAlbums: state.likedAlbums.filter(album => album.id !== payload)
      }
    case SET_SEARCH_INPUT_VALUE_ALBUMS:
      return {
        ...state,
        filterAlbums: {...state.filterAlbums, search: payload}
      }
    case CHANGE_CURRENT_PAGE_ALBUMS:
      return {
        ...state,
        filterAlbums: {
          ...state.filterAlbums,
          currentPage: payload,
        }
      }
    case CHANGE_ORDER_ITEMS_ALBUMS:
        return {
          ...state,
          filterAlbums: {
            ...state.filterAlbums,
            order: payload,
          }
      }
    case CHANGE_AMOUNT_VISIBLE_ITEMS_ALBUMS:
      return {
        ...state,
        filterAlbums: {
          ...state.filterAlbums,
          amountAlbums: payload,
        }
      }
    case PAGE_VIEW_SWITCH_ALBUMS:
      return {
        ...state,
        pageActiveType: payload,
      }
    case RAISES_CURRENT_PAGE_ALBUMS:
      return {
        ...state,
        filterAlbums: {
          ...state.filterAlbums,
          currentPage: payload,
        }
      }
    default: return state;
  }
}

export default albumsReducer;