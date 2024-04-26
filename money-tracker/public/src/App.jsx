import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(' ');
  const [datetime, setTime] = useState('2024-01-01T00:00');
  const [description, setDescription] = useState(' ');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = (import.meta.env.REACT_APP_API_URL || 'http://localhost:4000/api') + '/transaction';
    console.log(import.meta.env.REACT_APP_API_URL);// Not working
    console.log(url);

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, datetime })
    })
      .then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text"
            value={name} 
            onChange={ev=>setName(ev.target.value)}
            placeholder={'+200 Samsung TV'} />
          <input type="datetime-local"
            value={datetime}
          onChange={ev => setTime(ev.target.value)}/>
        </div>
        <div className='description'>
          <input type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for a new TV.</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-12-18 21:34</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">It was time for a new website.</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-12-18 21:34</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New IPhone</div>
            <div className="description">It was time for a new Phone.</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-12-18 21:34</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;