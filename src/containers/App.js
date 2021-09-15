import React, {Fragment} from'react'
import BeerBlock from './beerBlock/beerBlock';
import fetch from '../fetch';
import Header from './Header/Header';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {loadData} from '../Actions/pageAction.js';



class App extends React.Component {
  Data = new fetch();

  componentDidMount() {
    // console.log(this.props.useSearch, this.props.items, this.props.searchItems)
    this.props.loadData();
    console.log(this.props.loadData())
}
 
  
  render() {
    

    if (this.props.error) {
      return <div>Ошибка: {this.props.error.message}</div>;
    /*} else if (!isLoaded) {
      return <div>Загрузка...</div>;*/
    } else {
      let items = (this.props.useSearch && this.props.searchItems) ? this.props.searchItems : this.props.items;
      return (
        <Fragment>
         <div>
           <Header />
                  { items.map( (item) => 
                    <BeerBlock key={item.website_url+item.name}
                     name={item.name} 
                     website_url={item.website_url}
                     updated_at={item.updated_at}
                      latitude={item.latitude}  
                    longitude={item.longitude}
                    />
                  )}
            </div>

        </Fragment>
        
        
      );
    }
  }
}

const mapStateToProps = state => {
  return { items: state.items, useSearch: state.useSearch, searchItems: state.searchItems, error: state.error }
 }

function mapDispatchToProps(dispatch) {
			let tmp = {
        dispatch,
				...bindActionCreators({loadData}, dispatch)
			};
      console.log(tmp)
      return tmp;
}


export default connect(mapStateToProps, mapDispatchToProps)(App)


