import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../reducers/bitcoin';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';

class ChartContainer extends Component {
  formatChartData = () => {
    const {bpi} = this.props.data.data;
    return {
      labels: _.map(_.keys(bpi), date => moment(date).format("ll")),
      datasets: [
        {
          label: "Bitcoin",
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(bpi)
        }
      ]
    }
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <Line data={this.formatChartData()} height={250}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({data: state.bitcoinData}),
  {fetchData}
)(ChartContainer);

