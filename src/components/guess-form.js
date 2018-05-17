import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form
        onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.target);
          const guess = data.get('userGuess');
          props.onSubmit(guess);
          e.target.reset();   
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" 
                required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

