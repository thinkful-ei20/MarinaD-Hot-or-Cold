import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 className={props.feedback} id="feedback">{props.feedback}</h2>
            <GuessForm onSubmit={(val)=> props.onSubmit(val)}
            currentGuess={props.currentGuess}/>
        </section>
    );
}

