import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import {inputText} from '../Components/Form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState(0);
   useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(res => res.json())
    .then((data) => setItems(data))
   }, [number])


 /* const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
        if (response.ok) {
          const data = await response.json();
          setDogs(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }; 
  }, []);
  */
   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      {/* <DogList /> */}
      {/* <Form onFetchData={fetchData} /> */}
      <Form setNumberOfDogs={setNumber}/>
      <DogList dogsList={items.message}/>
    </div>
  );
}

