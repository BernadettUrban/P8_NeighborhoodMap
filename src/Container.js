//import React, { Component } from 'react';
import React from 'react';

import { Map } from './map/Map';
import GoogleApiComponent from './utils/GoogleApiComponent';

import Marker from './map/Marker';

export class Container extends React.Component {

    renderMarkers() {
        return this.props.places.map((item, index) => {
            return <Marker key={item.key} title={item.title} lat={item.lat} lng={item.lng} />
        });
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };

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
    apiKey: 'AIzaSyDwaAOJYdBMw68dGW1hHjn6B65ua0f_6XU' 
})(Container)
