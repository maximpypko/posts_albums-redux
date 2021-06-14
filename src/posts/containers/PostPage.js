import { useEffect } from 'react';
import {
  getPosts,
  setPostsSearchValue,
  changesOrderItems,
  changeAmountVisibleItems,
  changeCurrentPage,
  getPostsRange,
  isTimeRequest,
  setPageActiveType,
  raisesCurrentPage,
  getSearchPosts
} from "../../store/actions/index";
import { connect } from "react-redux";

import Header from "../../common/containers/Header";
import ServicePanel from "../../common/containers/ServicePanel";
import ButtonLoadMore from "../../common/components/ButtonLoadMore";
import PaginationList from "../../common/components/PaginationList";
import GridViewWithPictures from './GridViewWithPictures';
import GridViewWithoutPictures from './GridViewWithoutPictures';

function PostPage({
  posts,
  setPostsSearchValue,
  timeRequest,
  isTimeRequest,
  changesOrderItems,
  changeAmountVisibleItems,
  amountPaginationItems,
  getPosts,
  currentPage,
  amountVisibleItems,
  order,
  inputValue,
  getPostsRange,
  setPageActiveType,
  pageActiveType,
  changeCurrentPage,
  activeContentPage,
  raisesCurrentPage,
  getSearchPosts
}) {

  useEffect(() => {
    if (!inputValue) {
      isTimeRequest(true)
      getPosts(amountVisibleItems, order);
    }
  }, [amountVisibleItems, getPosts, isTimeRequest, order, inputValue]);
  
  useEffect(() => {
    if (inputValue.length) {
      isTimeRequest(true)
      getSearchPosts(amountVisibleItems, inputValue, order, currentPage);
    }
  }, [amountVisibleItems, getSearchPosts, inputValue, isTimeRequest, order, currentPage]);

  return (
    <main className="uk-main">
      <Header/>
      <ServicePanel        
        inputValue={inputValue}
        setSearchValue={setPostsSearchValue}
        timeRequest={timeRequest}
        changesOrderItems={changesOrderItems}
        changeAmountVisibleItems={changeAmountVisibleItems}
        setPageActiveType={setPageActiveType}
        pageActiveType={pageActiveType}
        changeCurrentPage={changeCurrentPage}
        activeContentPage={activeContentPage}
        />
      {
        pageActiveType === "grid" ?
          <GridViewWithPictures posts={posts}/> :
        <GridViewWithoutPictures posts={posts}/>
      }
      {
        !posts.length ||
        amountPaginationItems === currentPage ||
        <ButtonLoadMore
          timeRequest={timeRequest}
          currentPage={currentPage}
          amountVisibleItems={amountVisibleItems}
          order={order}
          activeContentPage={activeContentPage}
          raisesCurrentPage={raisesCurrentPage}
          isTimeRequest={isTimeRequest}
          getPostsRange={getPostsRange}
          inputValue={inputValue}
          getSearch={getSearchPosts}
        />
      }
      {
        !posts.length || <PaginationList
        getRequest={getPosts}
        getRangeRequest={getPostsRange}
        getSearchRequest={getSearchPosts}
        changeCurrentPage={changeCurrentPage}
        amountPaginationItems={amountPaginationItems}
        amountVisibleItems={amountVisibleItems}
        currentPage={currentPage}
        inputValue={inputValue}
        order={order}
        />
      }
    </main>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts,
    timeRequest:state.postsReducer.timeRequest,
    amountPaginationItems: state.postsReducer.amountPaginationItems,
    currentPage: state.postsReducer.filter.currentPage,
    amountVisibleItems: state.postsReducer.filter.amountPosts,
    order: state.postsReducer.filter.order,
    inputValue: state.postsReducer.filter.search,
    pageActiveType: state.postsReducer.pageActiveType,
    activeContentPage: state.postsReducer.activeContentPage,
  }
};

const mapDispatchToProps = {  
  setPostsSearchValue,
  changesOrderItems,
  changeAmountVisibleItems,
  setPageActiveType,
  getPosts,
  getPostsRange,
  changeCurrentPage,
  isTimeRequest,
  raisesCurrentPage,
  getSearchPosts,
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);