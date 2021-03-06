import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { jokes } from './jokes.js';
import Joke from './Joke/Joke.jsx';

const App = () => {
  let props = jokes.map((joke) => {
    return (
      <>
        <Joke
          userId={joke.id}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      </>
    );
  });
  return props;
};
render(<App />, document.querySelector('#app'));
