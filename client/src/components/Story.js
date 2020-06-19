import React from 'react';

import apartment from '../assets/apartment-icon.svg';
import money from '../assets/money-icon.svg';
import subway from '../assets/subway-icon.svg';

// The story section
const Story = () => (
    <div className="story-pane">
        <h1 style={styles.heading}>The Story</h1>
        <div id="image-container" style={styles.imageContainer}>
            <img src={apartment} style={styles.imageStyle} alt="apartment" />
            <img src={money} style={styles.imageStyle} alt="money" />
            <img src={subway} style={styles.imageStyle} alt="subway" />
        </div>
        <div id="content" style={styles.content}>
            Our goal for this project was to analyze Boston housing data for factors that affect where construction occurs. 
            Construction is virtually everywhere on the Northeastern campus, especially regarding housing, so we were curious 
            to see if that applied to the rest of Boston as a whole. In the process of using our web application, users will 
            learn how variables like income and proximity to public transportation influence the building of new apartments. 
        </div>
        <div style={{ textAlign: 'center', visibility: "hidden" }}>
            Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a>,&nbsp;
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>,
            and <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from&nbsp;
            <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>
        </div>
    </div>
)

const styles = {
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
        paddingLeft: '20%',
        paddingRight: '20%'
    }
}

export default Story;
