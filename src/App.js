import React from 'react';
import './App.css';
import Visa from './visa.png';
import MasterCard from './master-card.svg';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import Dice from './Dice';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import NumbersTable from './NumbersTable';
import SignUp from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const greetings = {
  lang: ['de', 'en', 'es', 'fr'],
  children: ['Ludwig', 'François'],
};

const maxNumber = [6, 100];

const rgbRef = [
  { r: 255, g: 0, b: 0 },
  { r: 128, g: 255, b: 0 },
];

const creditCardsInfos = [
  {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white',
  },
  {
    type: 'MasterCard',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'N26',
    owner: 'Maxence Bouret',
    bgColor: '#eeeeee',
    color: '#222222',
  },
  {
    type: 'Visa',
    number: '0123456789016984',
    expirationMonth: 12,
    expirationYear: 2019,
    bank: 'Name of the Bank',
    owner: 'Firstname Lastname',
    bgColor: '#ddbb55',
    color: 'white',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="idcards-title">IdCards</h1>
      <div className="d-flex flex-column px-2">
        {people.map((person) => {
          return (
            <IdCard
              picture={person.picture}
              firstName={person.firstName}
              lastName={person.lastName}
              gender={person.gender}
              height={person.height}
              birth={`${person.birth}`}
            ></IdCard>
          );
        })}
      </div>
      <div className="d-flex flex-column px-2">
        <h1 className="title">Greetings</h1>
        {greetings.children.map((element) => {
          return (
            <Greetings
              children={element}
              lang={element === 'Ludwig' ? 'de' : 'fr'}
            ></Greetings>
          );
        })}
      </div>
      <div className="d-flex flex-column px-2">
        <h1>Random</h1>
        {maxNumber.map((element) => {
          return <Random max={element} min="1"></Random>;
        })}
      </div>
      <div className="d-flex flex-column px-2">
        <h1>BoxColor</h1>
        {rgbRef.map((element) => {
          return (
            <BoxColor r={element.r} g={element.g} b={element.b}></BoxColor>
          );
        })}
      </div>
      <div>
        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <div>
        <h1>Dice</h1>
        <Dice />
      </div>
      <div>
        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
      </div>
      <div>
        <h1>SignUp</h1>
        <SignUp />
      </div>
    </div>
  );
}

export default App;
