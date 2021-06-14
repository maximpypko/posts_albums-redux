import PropTypes from 'prop-types';

function PageViewSwitch({
  pageActiveType,
  setPageActiveType,
  activeContentPage
}) {
  const newClassName = activeContentPage === "albums" ? "uk-invisible" : "";
  
  return (
    <div className={`uk-button-group uk-margin-left ${newClassName}`}>
      <button
        className={`uk-button uk-button-default ${pageActiveType === "grid" ? "uk-active" : ""}`}
        onClick={() => pageActiveType !== "grid" && setPageActiveType("grid")}>
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={`uk-button uk-button-default ${pageActiveType === "list" ? "uk-active" : ""}`}
        onClick={() => pageActiveType !== "list" && setPageActiveType("list")}>
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  );
}

PageViewSwitch.propTypes = {
  activeType: PropTypes.string,
  setActiveType: PropTypes.func,
  activeContentPage: PropTypes.string
}

export default PageViewSwitch;

