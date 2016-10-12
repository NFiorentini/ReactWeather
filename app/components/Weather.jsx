const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        const that = this;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(
            function (temp) {
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            },
            function (errorMessage){
                that.setState({isLoading: false});
                alert(errorMessage);
        });
    },

    render: function () {
        const {isLoading, temp, location} = this.state;

        function renderMessage() {
            if(isLoading) {
                return (
                  <h3 className="text-center">
                    Fetching Weather&#8230;
                  </h3>
                );
            } else if(temp && location) {
                return <WeatherMessage
                    temp={temp}
                    location={location}
                />;
            }
        }

        return (
            <div>
                <h1 className="text-center">
                  Get The Weather!
                </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
