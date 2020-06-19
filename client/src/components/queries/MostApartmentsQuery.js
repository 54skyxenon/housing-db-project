import React from 'react';
import { Chart } from "react-google-charts";

// Component for the most apartments query section
class MostApartmentsQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://cs3200-project-backend.herokuapp.com/most-apartments')
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

        let cityData = [['Neighborhood', '# Apartments']]
        hits.forEach(hit => {
            cityData.push([hit.name, hit['num_apartments']])
        })

        return (
            <div className="story-pane">
                <h1 style={styles.heading}>Most Apartments</h1>
                <div id="most-apartments-content" style={styles.content}>
                    Which neighborhoods are building the most apartments?
                    <div className='most-apartments-bar-chart'>
                        <Chart
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={cityData}
                            options={{
                                title: 'Apartment units in each neighborhood',
                                chartArea: { width: '50%', height: '80%' },
                                isStacked: true,
                                vAxis: { title: 'Neighborhood' },
                                width: '1000',
                                height: '1000',
                                bar: { groupWidth: '60%' }
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

export default MostApartmentsQuery;
