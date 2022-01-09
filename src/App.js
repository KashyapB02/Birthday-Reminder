import React, { useState } from 'react';
import Birthday from './Birthday';
import './App.css';

function App() {

  const [birthdayCounter, setBirthdayCounter] = useState(0);

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Image, setImage] = useState("");

  const [birthdayList, setList] = useState([]);

  function clearBirthday() {

    setBirthdayCounter(0);
    setList([]);
  }

  const addBirthday = () => {

    setBirthdayCounter((birthdayCounter + 1));
  }

  const deleteBirthday = (name) => {

    setBirthdayCounter((birthdayCounter - 1));

    const newList = birthdayList.filter((personName) => (personName !== name));
    setList(newList);
  }

  const Submission = (e) => {
    
    e.preventDefault();
    const birthdayPerson = {Name, Age, Image};
    setList([...birthdayList, birthdayPerson]);

    addBirthday();

    setName("");
    setAge("")
    setImage("");
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <form className="birthdayForm">
          <div className='formHeading'>
            <div className="heading-content">Add Birthdays</div>
          </div>
          <div className='empty'></div>
          <div className="getInfo">
            <label className='labels'>Who's Birthday</label>
            <input className='getInput' placeholder='Enter Name of Person' value={Name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="getInfo">
            <label className='labels'>Person's Age</label>
            <input className='getInput' type="text" placeholder='Enter Age of Person' value={Age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="getInfo">
            <label className='labels'>Image URL</label>
            <input className='getInput' type="url" placeholder='Enter URL of Image' value={Image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div className='empty'></div>
          <div className="Button">
            <button type="submit" className='clickButton' onClick={Submission}>+ Add</button>
          </div>
        </form>
        <div className="container">
          <div className='listHeading'>
            <div className="heading-content">{birthdayCounter} Birthdays Today</div>
          </div>
          <div className="displayBirthday">

            {birthdayList.map((persons) => {

              return (

                <Birthday avatar={persons.Image} name={persons.Name} age={persons.Age} deleted={deleteBirthday} />
              )
            })}
          </div>

          <div className='Button'>
            <button className='clickButton' onClick={clearBirthday}>Clear All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;