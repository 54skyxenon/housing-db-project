import React from 'react';
import GoogleMapReact from 'google-map-react';

// https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a
// The neighborhood section
class Neighborhood extends React.Component {

    // considering making a constructor with state
    render = () => {
        return (
            <div id="content-pane" style={styles}>
                <h1 style={styles.heading}>Boston Neighborhoods</h1>
                {/* This won't render... */}
                <GoogleMapReact
                    // bootstrapURLKeys={{
                    //     key: API_KEY,
                    //     language: 'en'
                    // }}
                    defaultCenter={this.props.center}
                    center={this.props.center}
                    defaultZoom={this.props.zoom}
                />
            </div>
        )
    }
}

const styles = {
    backgroundColor: '#FAFDFF',
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
