import React from 'react'
import { bindActionCreators } from 'redux';
import classes from './Header.module.css';
import { connect } from 'react-redux'
import {searchData, clearSearch} from '../../Actions/pageAction.js';

class Header extends React.Component{
constructor(props){
    super(props);
    this.searchItems = this.searchItems.bind(this);
    this.clearSearchClick = this.clearSearchClick.bind(this);
}

 
searchItems(){
  let inputValue = document.querySelector('.input-text').value;
  console.log(`searching <${inputValue}>`)
  this.props.searchData(inputValue)
}

clearSearchClick() {
  this.props.clearSearch();
}


render() {
     
    return(
        <div>
        <h1 className={classes.title}>
        AWESOME breweries
      </h1>
       <div>
       <input type='text' className={'input_text'} ></input>
       <button onClick={this.searchItems}>Search</button>
       <button onClick={this.clearSearchClick}>Clear search</button>
       </div>
       </div>
    )           
  }
}

const mapStateToProps = state => {
 return { errpr: state.error }
}

function mapDispatchToProps(dispatch) {
        return {
          dispatch,
          ...bindActionCreators({searchData, clearSearch}, dispatch),
        };
        
	}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
