
import './App.scss';
import Theform from './components/Theform';
import CountryDetails from './components/CountryDetails'
import CapitalDetails from './components/CapitalDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {

  const [loading, setloading] = useState(false);
  const [countries, setcountries] = useState([]);
  const [proper, setproper] = useState([]);



  // const key2 = '44bff28e3af24cba3666256c41f32228';

  // const forcapitalurl = `https://api.countrylayer.com/v2/all?access_key=${key2}`;



  const fetchWeather = async (capital) => {
    const key = '539594bd140641d214e3b61b2f55521c';
    const weatherurl = `http://api.weatherstack.com/current?access_key=${key}&query=${capital.name}`;
    console.log(weatherurl);
    setloading(true);
    try {
      const response = await fetch(weatherurl);
      const array = await response.json();
      console.log(array);
      setproper(array);
      setloading(false);



    } catch (error) {
      setloading(false);
      console.log(error);
    }



  }

  useEffect(() => {
    setTimeout(console.log(proper), 2000);


  })










  const fetchCapital = async (country) => {

    const capitalurl = `https://restcountries.com/v2/name/${country}`;



    setloading(true);
    try {
      const response = await fetch(capitalurl);
      const array = await response.json();
      setloading(false);
      if (!array.status)
        setcountries(array);


    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }






  return (
    <main>

      <div className="formContainer">
        <h1>


          {loading ? "Loading..." : "Weather Search"}
        </h1>
        <div className="hr"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Theform loader={fetchCapital} />} />
            <Route path="/CountryDetails" element={<CountryDetails selCon={fetchWeather} isloading={loading} countries={countries} />} />
            <Route path="/CapitalDetails" element={<CapitalDetails proper={proper} isloading={loading} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
