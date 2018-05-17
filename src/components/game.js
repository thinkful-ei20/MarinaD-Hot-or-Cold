import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      feedback: 'Make your guess!',
      count: 0,
      currentGuess: undefined,
      guesses: [],
      number: 85,
      what: false
    };
  }

  determineFeedback(guess){
    if(Number(guess) === this.state.number){
      return 'You win! Start a new game?';
    }  
    const diff = Math.abs(Number(guess) - this.state.number);
    if(diff > 80){
      return 'Iceberg Cold!';
    }
    if(diff <= 80 && diff > 60){
      return 'Very Cold';
    }
    if(diff <= 60 && diff > 40){
      return 'Lukewarm';
    }
    if(diff <= 40 && diff > 20){
      return 'Warm';
    }
    if(diff <= 20 && diff > 10){
      return 'Hot';
    }
    return 'Burning Hot!';
  }

  componentDidMount(){
    this.setState({number: Math.floor(Math.random() * 100)});  
  }

  handleGuess(guess){
    const newFeedback = this.determineFeedback(guess);
    this.setState({feedback: newFeedback,
    count: this.state.count +1,
    currentGuess: guess,
    guesses: [...this.state.guesses, guess]});
  }

  handleNew(){  
    this.setState({feedback: 'Make your guess!',
    count : 0,
    currentGuess: '',
    guesses: [],
    number: 85,
    what: false});
  }

  handleWhat(what){
    this.setState({what});
  }
  
  render(){
    if(this.state.what){
      return <InfoModal onClose={(val)=>this.handleWhat(val)}/>;
    } 

    return (
        <div>
            <Header handleWhat={(val) => this.handleWhat(val)}
                    handleNew={()=>this.handleNew()} />
            <GuessSection onSubmit={(val)=> this.handleGuess(val)} 
            feedback={this.state.feedback}
            currentGuess={this.state.currentGuess} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
  }
}

