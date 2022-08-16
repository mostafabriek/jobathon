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
      <tbody>
        <table>
          {customers.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.address}</th>
              <th>{item.age}</th>
              <th>{item.email}</th>
              <th>{item.date}</th>
            </tr>
          ))}
        </table>
      </tbody>
    </>
  )
}

export default App
