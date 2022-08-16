import React, { useState, useEffect } from 'react'
import './App.css'
import data from './data.json'
const customers = data.customers
function App() {
  // const [data, setData] = useState([])
  // const getData = () => {
  //   fetch('./data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response)
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson)
  //       setData(myJson)
  //     })
  // }
  console.log(customers)
  useEffect(() => {
    // getData()
  }, [])
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
    </>
  )
}

export default App
