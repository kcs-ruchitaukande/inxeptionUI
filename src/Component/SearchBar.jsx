import React from 'react';

const SearchBar = () => {
  return (
    
    <div class="row">    
        <div class="col-xs-8 col-xs-offset-2">
		    <div class="input-group">
                <div class="input-group-btn search-panel" style={{position: "relative",
    width: '100%'
}}>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      <span id="search_concept"><span class="glyphicon glyphicon-align-justify"></span> All</span>  <span class="caret"></span>
                    </button>
                    <div class="search-box col-md-5">               
        <form action="">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected="">All</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">three</option>
</select>
                </div>
                <input type="text" class="form-control" aria-label="Search input with dropdown button"/>
                <div class="input-group-append">
                    <button class="btn btn-success" type="button">Search</button>
                </div>
            </div>
        </form>
    </div>
                   {/* <ul class="dropdown-menu" role="menu">
                      <li><a href="#contains"> <span class="glyphicon glyphicon-envelope text-danger"></span> Email</a></li>
                      <li><a href="#its_equal"> <span class="glyphicon glyphicon-music text-warning"></span> Music</a></li>
                      <li><a href="#greather_than"> <span class="glyphicon glyphicon-user text-success"></span> Users</a></li>
                      <li><a href="#less_than"><span class="glyphicon glyphicon-book text-primary"></span> Books </a></li>
                      <li class="divider"></li>
                      <li><a href="#all"> <span class="glyphicon glyphicon-picture text-info"></span> Pictures</a></li>
                    </ul> */}
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param"/>         
                <input type="text" class="form-control" name="x" placeholder="Search term..."/>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
            </div>
        </div>
	</div>


    /*<nav style= {{ marginBottom :"30px" } } className="blue">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search"/>
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search </i>
            </label>
          <i className="material-icons">close </i>
        </div>
      </form>
    </div>
  </nav>*/
  )
}
export default SearchBar;
