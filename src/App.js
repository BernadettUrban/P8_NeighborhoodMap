import React, { Component } from 'react';
import MapContainer from './Container';
import ToggleButton from './ui/ToggleButton';

import { PLACES } from './data/Data'
import { PlaceCategories } from './data/Data'

class App extends Component {

  constructor(props) {
    super(props);
    this.onCategoryToggleOn = this.onCategoryToggleOn.bind(this);
    this.onCategoryToggleOff = this.onCategoryToggleOff.bind(this);
    this.onPlaceToggleOn = this.onPlaceToggleOn.bind(this);
    this.onPlaceToggleOff = this.onPlaceToggleOff.bind(this);

    this.state = { 
      searchValue: '',
      showSideBar: false,
      places: PLACES,
      filterPlaces: [],
      filterCategories: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterCategories.length !== this.state.filterCategories.length) {
      this.updatePlacesByCategories();
    }

    if (prevState.filterPlaces.length !== this.state.filterPlaces.length) {
      this.updatePlacesByPlaces();
    }
  }

  updatePlacesByPlaces(){
    if (this.state.filterPlaces.length === 0) {
      this.setState({ places:this.getPlacesByCategory() });
      return
    }
      
    let places = PLACES.filter((item) => {
      return this.state.filterPlaces.includes(item.key);
    });
    this.setState({ places: places });
  }

  getPlacesByCategory() {
    if (this.state.filterCategories.length === 0) {
      return PLACES;
    }
  }

  updatePlaces() {
    if (this.state.filterCategories.length === 0) {
      this.setState({ places: PLACES });
      return;
    }

    let places = PLACES.filter((item) => {
      return this.state.filterCategories.includes(item.type);
    });
    
    
     return places;
  }
  
  updatePlacesByCategories() {
     this.setState({
       filterPlaces: []
     });
    let places = this.getPlacesByCategory();
    this.setState({ places: places });
  }
    

  addPlaceToFilter(value) {
    var currentFilter = this.state.filterPlaces;
    currentFilter.push(value);
    this.setState({ filterPlaces: currentFilter });
  }

  removePlaceFromFilter(value) {
    var currentFilter = this.state.filterPlaces;
    this.setState({
      filterPlaces: currentFilter.filter((item) => {
        return item !== value;
      })
    });
  }

  addCategoryToFilter(value) {
    var currentFilter = this.state.filterCategories;
    currentFilter.push(value);
    this.setState({ filterCategories: currentFilter });
  }
  
  removeCategoryFromFilter(value) {
    var currentFilter = this.state.filterCategories;
    this.setState({
      filterCategories: currentFilter.filter((item) => {
        return item !== value;
      })
    });
  }
  
    onPlaceToggleOn(value) {
    this.addPlaceToFilter(value);
    this.updatePlacesByPlaces();
  }

  onPlaceToggleOff(value) {
    this.removePlaceFromFilter(value);
  }

  onCategoryToggleOn(value) {
    this.addCategoryToFilter(value);
    this.updatePlacesByCategories();
  }

  onCategoryToggleOff(value) {
    this.removeCategoryFromFilter(value);
  }

  renderPlacesFilter() {
    return this.getPlacesByCategory().map((item, index) => {
      return <ToggleButton
        key={item.key}
        onToggleOn={this.onCategoryToggleOn} 
        onToggleOff={this.onCategoryToggleOff} 
        id={item.key} 
        icon={item.icon} 
        text={item.title} />
    });
   }

  renderCategoriesFilter() {
    return PlaceCategories.map((item, index) => {
      return <ToggleButton
        key={item.id}
        onToggleOn={this.onToggleOn} 
        onToggleOff={this.onToggleOff} 
        id={item.id} 
        icon={item.icon} 
        text={item.title} />
    });
  }
                               
  toggleSidebar() {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  }

  sideBarStatus() {
    if (this.state.showSideBar) {
      return "side-bar";
    }
    return "side-bar side-bar-closed";
  }

  render() {
    return (
      <div>
        <MapContainer places={this.state.places} />
        <div className={this.sideBarStatus()}>
          <div onClick={() => {this.toggleSidebar()}} className="side-bar-toggle">
            <i className="fas fa-bars"></i>
          </div>
          <h3 className="app-title">Neighborhood Map</h3>
          <div className="help">
              You can filter by a <b>Category</b> or by <b>Place</b> name.
            </div>
            <div className="toolbar-title">Categories</div>
            {this.renderCategoriesFilter()}
            <div className="toolbar-title">Places</div>
            {this.renderPlacesFilter()}
        </div>
      </div>
    );
  }
}

export default App
