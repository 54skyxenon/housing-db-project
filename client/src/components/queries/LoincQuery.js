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

        this.setState({hits: JSON.parse(JSON.stringify(this.state.hits))})
    }

    render() {
        const { isLoading, hits } = this.state;

        if (isLoading) {
            return (<p>Loading ...</p>);
        }

        return (
            <div id="story-pane">
                <h1 style={styles.heading}>Low Income Housing</h1>
                <div id="loinc-content" style={styles.content}>
                    What is the amount of low income housing compared to the overall population?
                        {hits.map(hit =>
                            <div className='loinc-pie-chart' key={hit.objectID}>
                                {hit.working_population - hit.total_income_restricted_units > 0 ? (
                                <Chart
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Normal Units', hit.working_population - hit.total_income_restricted_units],
                                        ['Income Restricted Units', hit.total_income_restricted_units]
                                    ]}
                                    options={{
                                        title: hit.name 
                                    }}
                                />
                            ) : <p> No Data For: {hit.name} </p>}
                            </div>
                        )}
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
