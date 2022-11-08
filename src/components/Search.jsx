const {useState} = React;

var Search = (props) => {

  const [currText, setCurrText] = useState('');
  var updateText = function (str) {
    setCurrText(str);
    _.throttle(() => { props.searchYouTube(str, props.updateVideos); }, 1000)();
  };

  return (
    <div className="search-bar form-inline">
      <input value={currText} className="form-control" type="text" onChange={(e) => updateText(e.currentTarget.value)}/>
      <button className="btn hidden-sm-down" onClick={() => updateText('')}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
