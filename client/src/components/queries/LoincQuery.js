import React from 'react';
import { Chart } from "react-google-charts";

// Component for the low income query section
class LoincQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://cs3200-project-backend.herokuapp.com/loinc')
            .then(res => res.json())
            .then(data => this.setState({ hits: data, isLoading: false }));

        this.setState({ hits: JSON.parse(JSON.stringify(this.state.hits)) })
    }

    render() {
        const { isLoading, hits } = this.state;
        if (isLoading) {
            return (<p>Loading ...</p>);
        }

        console.log(hits)

        let cityData = [['Neighborhood', 'Low Income Units', 'Working Pop.']]
        hits.forEach(hit => {
            cityData.push([hit.name, hit.total_income_restricted_units, hit.working_population])
        })

        return (
            <div className="story-pane">
                <h1 style={styles.heading}>Low Income Housing</h1>
                <div id="loinc-content" style={styles.content}>
                    What is the amount of low income housing compared to the overall population?
                    <Chart
                        width={'100%'}
                        height={'1000px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={cityData}
                        options={{
                            chart: {
                                title: 'Comparing Low-Income Housing Units to Working Population',
                            },
                            legend: {position: 'none'}
                        }}
                    />
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

export default LoincQuery;
