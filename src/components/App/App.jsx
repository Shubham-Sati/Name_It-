import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';
import ResultContainer from '../ResultsComponents/ResultContainer';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        
        this.setState({
            headerExpanded: inputText.length > 0 ? false : true,
            // Alternate way to write inputText.length > 0 ? false : true
            // 1. !(inputText.length > 0)
            // 2. !inputText
            suggestedNames: inputText.length > 0 ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headerTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames = {this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
