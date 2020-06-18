import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react';
// ...

export class MapContainer extends React.Component {
    render = () => (
        <Map
            google={this.props.google}
            zoom={14.12}
            initialCenter={{
                lat: 42.3403095,
                lng: -71.0810753
            }}
        >
            {/* <Marker onClick={this.onMarkerClick} name={'Current location'} /> */}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCzNr-19CYLeoRnTPOyO3oMWkhBIDtyvRc')
})(MapContainer)