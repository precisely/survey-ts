import * as React from 'react';
import * as Survey from 'survey-react';

import './App.css';


class App extends React.Component {

  public render() {

    const surveyJson = {
      elements: [
        { type: 'text', name: 'customerName', title: 'What is your name?', isRequired: true}
      ]
    };

    const model = new Survey.ReactSurveyModel(surveyJson);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <h2>Survey Test</h2>
          The survey test will be here:
          <Survey.Survey model={model} />
        </div>
      </div>
    );

  }

}


export default App;
