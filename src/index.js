import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*App.defaultProps = {
    headerMessage:'Hello!!!'
};
 set default props value for a component*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/*setTimeout(() => {
    ReactDOM.render(
        <h2>....</h2>,
        document.getElementById('root')
    );
},4000)*/