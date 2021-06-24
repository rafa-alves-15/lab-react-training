import React from 'react';
import Dice0 from './dice-empty.png';
import Dice1 from './dice1.png';
import Dice2 from './dice2.png';
import Dice3 from './dice3.png';
import Dice4 from './dice4.png';
import Dice5 from './dice5.png';
import Dice6 from './dice6.png';

const diceImages = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
class Dice extends React.Component {
  state = {
    diceFaces: [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6],
    currentDice: '',
  };
  //this.setState({ newTodo: event.target.value });
  handleDice = () => {
    const newDice = this.state.diceFaces[Math.floor(Math.random() * 6 + 1)];
    this.setState({ currentDice: newDice });
  };

  render() {
    return (
      <div>
        <input
          onClick={() => {
            this.handleDice();
          }}
          type={'image'}
          src={diceImages[Math.floor(Math.random() * 6 + 1)]}
          alt="Dice"
        ></input>
      </div>
    );
  }
}

export default Dice;
