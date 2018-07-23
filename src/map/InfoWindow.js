import React from 'react';

export class InfoWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        let {show} = this.props;

        if (prevProps.marker !== this.props.marker) {
            this.renderInfoWindow();
        }
        
        if (prevProps.show !== show) {
            if (show) {
                this.openWindow();
            } else {
                this.closeWindow();
            }
        }
    }

    openWindow() {
        this.infowindow.open(this.props.map, this.props.marker);
    }

    closeWindow() {
        this.infowindow.close();
    }

    renderInfoWindow() {
        let {google} = this.props;
        let {title} = this.props;
        let { detail } = this.state;
        let { twitter } = this.state;
        let { url } = this.state;

        var template = `
            <h2>${title}</h2>
        `;

        if (detail) {
            template += `<p>${detail}</p>`;
        }

        if (twitter) {
            template += `<p>Twitter: <a target="_blank" href="https://twitter.com/${twitter}">@${twitter}</a></p>`;
        }

        if (url) {
            template += `<p>Website: <a target="_blank" href="${url}">${url}</a></p>`;
        }

        this.infowindow = new google.maps.InfoWindow({
            content: template
        });
    }

    render() {
        return null;
    }
}


export default InfoWindow;
