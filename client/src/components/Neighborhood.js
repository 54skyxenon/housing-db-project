import React from 'react';
import MapContainer from './MapContainer';

// https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a
// The neighborhood section
class Neighborhood extends React.Component {
    // considering making a constructor with state
    render = () => {
        return (
            <div id="neighborhood-pane" >
                <h1 style={styles.heading}>Boston Neighborhoods</h1>
                <div id="map-container">
                    <MapContainer />
                </div>
            </div>
        )
    }
}

const styles = {
    heading: {
        textAlign: 'center',
        fontSize: '3vw',
        fontFamily: 'Lato',
        color: '#71869F',
        textTransform: 'uppercase'
    },
    content: {
        textAlign: 'center',
        fontSize: '2vw',
        fontFamily: 'Lato',
        color: '#71869F',
        paddingTop: '5%',
        paddingBottom: '10%',
        paddingLeft: '20%',
        paddingRight: '20%'
    }
}

export default Neighborhood;
