import React from 'react';
import { Chart } from "react-google-charts";

// Component for the new apartments query section
class NewApartmentsQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://cs3200-project-backend.herokuapp.com/new-apartments')
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

        let cityData = [['Building Type', 'Distance (meters)']]
        hits.forEach(hit => {
            cityData.push([hit['Apartments'], hit['avg(distance)']])
        })

        return (
            <div className="story-pane">
                <h1 style={styles.heading}>New Apartments</h1>
                <div id="new-apartments-content" style={styles.content}>
                    Will new apartments be closer to subways than other buildings?
                    <div id='new-apartments-histogram'>
                        <Chart
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={cityData}
                            options={{
                                title: 'Average distance of building',
                                width: '600',
                                height: '500',
                                vAxis: { title: 'Type of Building' },
                                hAxis: { minValue: 0 }
                            }}
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

export default NewApartmentsQuery;
