import React from 'react';
import { Map } from './map/Map';
import GoogleApiComponent from './utils/GoogleApiComponent';

import Marker from './map/Marker';

export class Container extends React.Component {
    
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }
    
    showInfoWindow(item) {
        if (this.props.selectedPlace === null)
            return false;
        return this.props.selectedPlace.key === item.key;
    }
    
    onMarkerClick(place) {
        this.props.onSelectPlace(place);
    }


    renderMarkers() {
        return this.props.places.map((item, index) => {
            return <Marker 
                key={item.key} 
                title={item.title}
                lat={item.lat} 
                lng={item.lng} 
                place={item}
                showInfoWindow={this.showInfoWindow(item)} 
                onMarkerClick={this.onMarkerClick}
                onInfowindowClose={() => { this.props.onInfowindowClose(item) }}
                />
        });
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };
            
        if (this.props.error) {
            return (
                <div className="container-error">
                    <img className="error-icon" alt="Connection Error" src="error-icon.png" />
                    <p className="error-message">Error on loading the map.<br />Verify your connection or try another browser.</p>
                </div>
            );            
        }

        if (!this.props.loaded) {
            return (
                <div className="container-loading">
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                    <p className="loading-text">Loading...</p>
                </div>
            );
        }

        let centerMap = { lat: 47.497912, lng: 19.040235 };

        return (
            <Map style={style} centerMap={centerMap} google={this.props.google}>
                {this.renderMarkers()}
            </Map>
        );
    }
}

export default GoogleApiComponent({
    apiKey: '' 
})(Container);
