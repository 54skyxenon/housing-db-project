import React from 'react';
import { Chart } from "react-google-charts";

// Component for the subway query section
class SubwayQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://cs3200-project-backend.herokuapp.com/subway')
            .then(res => res.json())
            .then(data => this.setState({ hits: data, isLoading: false }));

        this.setState({
            hits: JSON.parse(JSON.stringify(this.state.hits))
        })
    }

    render() {
        const { isLoading, hits } = this.state;
        if (isLoading) {
            return (<p>Loading ...</p>);
        }

        let cityData = [['Neighborhood', 'Distance']]
        hits.forEach(hit => {
            cityData.push([hit.name, Math.trunc(hit['avg(distance)'])])
        })

        return (
            <div id="story-pane">
                <h1 style={styles.heading}>Subway Proximity</h1>
                <div id="subway-content" style={styles.content}>
                    What is the average subway distance from new constructions?
                    <div className='subway-histogram'>
                        <Chart
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={cityData}
                            options={{
                                title: 'Average Distance (meters)',
                                chartArea: { width: '50%', height: '80%' },
                                isStacked: true,
                                hAxis: {
                                    title: 'Distance',
                                    minValue: 0,
                                },
                                vAxis: { title: 'Neighborhood' },
                                width: '1000',
                                height: '1000',
                                bar: { groupWidth: '60%' }
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '3' }}
                        />
                    </div>
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
        paddingLeft: '20%',
        paddingRight: '20%'
    }
}

export default SubwayQuery;
