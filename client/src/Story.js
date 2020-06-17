import React from 'react';

import apartment from './assets/apartment-icon.svg';
import money from './assets/money-icon.svg';
import subway from './assets/subway-icon.svg';

// The story section
const Story = () => (
    <div id="content-pane" style={styles}>
        <h1 style={styles.heading}>The Story</h1>
        <div id="image-container" style={styles.imageContainer}>
            <img src={apartment} style={styles.imageStyle} alt="apartment" />
            <img src={money} style={styles.imageStyle} alt="money" />
            <img src={subway} style={styles.imageStyle} alt="subway" />
        </div>
        <div id="content" style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
)

const styles = {
    backgroundColor: '#FAFDFF',
    imageStyle: {
        maxWidth: '20%'
    },
    imageContainer: {
        paddingLeft: '10%',
        paddingRight: '10%',
        display: 'flex',
        justifyContent: 'space-between'
    },
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

export default Story;
