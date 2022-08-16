import React, { useState, useEffect } from 'react'
import './App.css'
import data from './data.json'
const customers = data.customers
function printClicked() {
  window.print()
}
function App() {
  console.log(customers)
  useEffect(() => {}, [])
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>address</th>
            <th>age</th>
            <th>email</th>
            <th>date</th>
          </tr>
          {customers.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="print" onClick={printClicked}>
        print
      </div>
    </>
  )
}

export default App
