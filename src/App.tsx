import * as React from 'react';
import * as Survey from 'survey-react';
// import * as Survey from './survey-react/survey.react';
// import * as Survey from 'surveyjs/src/survey';
// import * as ReactSurvey from 'surveyjs/src/react/reactSurvey';
//var Survey = import('surveyjs/src/survey');


import './App.css';


class App extends React.Component {

  surveyJson1: {
    elements: [
      { type: 'text', name: 'customerName', title: 'What is your name?', isRequired: true}
    ]
  };

  surveyJson2: {
    title: "Test title",
    pages: [
      {
        name: "page1", 
        elements: [
          { type: "text", name: "question1" }
        ]
      }]
  };

  onSurveyComplete(survey: any) {
    console.log(survey);
  }

  onValueChanged(result: any) {
    console.log(result);
  }

  nothing(args: any) {
    console.log('nothing called');
  }

  public render() {
    // FIXME: Maybe the problem is SurveyModel is the wrong object?
    const model = new Survey.ReactSurveyModel(this.surveyJson2);
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
          {/*
              <Survey.Survey model={model}
              doAfterRenderSurvey={this.nothing}
              onComplete={this.onSurveyComplete}
              onValueChanged={this.onValueChanged} />
            */}
          <Survey.Survey model={model}
                         doAfterRenderSurvey={this.nothing} />
          {/* <Survey.Survey json={this.surveyJson1} /> */}
        </div>
      </div>
    );
  }

}


export default App;
