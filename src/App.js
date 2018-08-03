import React, { Component } from 'react';
import MapContainer from './Container';
import ToggleButton from './ui/ToggleButton';

import { PLACES } from './data/Data';
import { CATEGORIES } from './data/Data';

class App extends Component {

  constructor(props) {
    super(props);
    this.onCategoryToggleOn = this.onCategoryToggleOn.bind(this);
    this.onCategoryToggleOff = this.onCategoryToggleOff.bind(this);
    this.onPlaceToggleOn = this.onPlaceToggleOn.bind(this);
    this.onPlaceToggleOff = this.onPlaceToggleOff.bind(this);
    this.onSelectPlace = this.onSelectPlace.bind(this);
    this.onInfowindowClose = this.onInfowindowClose.bind(this);

    this.state = { 
      searchValue: '',
      selectedPlace: null,
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

    if (prevState.selectedPlace !== this.state.selectedPlace) {
      this.updatePlacesByPlaces();
    }
  }

  updatePlacesByPlaces(){
    if (this.state.selectedPlace === null) {
      this.setState({ places:this.getPlacesByCategory() });
      return
    }
     
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
      return this.state.filterCategories.includes(item.type.key);
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
    this.setState({ selectedPlace: value });
  }

  removePlaceFromFilter(value) {
    
    this.setState({
       selectedPlace: null
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
    
  }

  onCategoryToggleOff(value) {
    this.removeCategoryFromFilter(value);
  }

  placeIsSelected(item) {
    if (this.state.selectedPlace === null)
      return false;
    return this.state.selectedPlace.key === item.key;
  }

  renderPlacesFilter() {
    return this.getPlacesByCategory().map((item, index) => {
      return <ToggleButton
        key={item.key}
        onToggleOn={this.onCategoryToggleOn} 
        onToggleOff={this.onCategoryToggleOff}
        toggleStateManagedByParent={true}
        toggled={this.placeIsSelected(item)} 
        id={item}
        icon={item.icon} 
        text={item.title} />
    });
   }

  renderCategoriesFilter() {
    return CATEGORIES.map((item, index) => {
      return <ToggleButton
        key={item.key}
        onToggleOn={this.onToggleOn} 
        onToggleOff={this.onToggleOff}
        toggleStateManagedByParent={false} 
        id={item.key} 
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
      
  onSelectPlace(place) {
    this.setState({
      selectedPlace: place
    });
  }

  onInfowindowClose(place) {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <div>
        <MapContainer 
            places={this.state.places}
            selectedPlace={this.state.selectedPlace}
            onSelectPlace={this.onSelectPlace}
            onInfowindowClose={this.onInfowindowClose}
        />
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
