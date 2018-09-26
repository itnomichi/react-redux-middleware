import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions/index';
import styles from '../../style/style.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div align="center">
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <div className={styles.search_bar + " " + "ui icon input"}>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Get a five-day forecast in your favorite cities"
                        />
                        <i className="inverted circular search link icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);