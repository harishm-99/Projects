import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(' ');
  const [dateTime, setDateTime] = useState('2024-01-01T00:00');
  const [description, setDescription] = useState(' ');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []); 

  async function getTransactions() {
    const url = (import.meta.env.REACT_APP_API_URL || 'http://localhost:4000/api') + '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = (import.meta.env.REACT_APP_API_URL || 'http://localhost:4000/api') + '/transaction';
    console.log(import.meta.env.REACT_APP_API_URL);// Not working
    console.log(url);
    // const price = name.split(' ')[0];

    // Extracting operator and price from the name input
    const nameValue = name.trim();
    const operator = nameValue[0]; // Extract the first character
    const price = parseFloat(nameValue.substring(1)); // Extract the price after the operator
    const signedPrice = operator === '-' ? -price : price; // Apply the operator to the price

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: signedPrice,
        name: nameValue.substring(1),
        description,
        dateTime,
      })
    })
      .then(response => {
        response.json().then(json => {
          setName('');
          setDescription('');
          setDateTime('');
          console.log('result', json);
        });
      });
  }

  let balance = 0;

  for (const transaction of transactions) {
    balance += transaction.signedPrice; 
  }

  balance = balance.toFixed(2);

  // Splitting the balance into integer and fractional parts
  const balanceParts = balance.split('.');
  const integerPart = balanceParts[0];
  const fractionalPart = balanceParts[1];

  return (
    <main>
      <h1>Rs. {integerPart}<span>{fractionalPart}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 Samsung TV'} />
          <input type="datetime-local"
            value={dateTime}
            onChange={ev => setDateTime(ev.target.value)} />
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
        {transactions.length > 0 && transactions.map(transaction => (
          <div key={transaction._id}>
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div className={"price" + (transaction.price < 0 ? 'red' : 'green')}>{transaction.price}</div>
                <div className="datetime">{transaction.dateTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App;