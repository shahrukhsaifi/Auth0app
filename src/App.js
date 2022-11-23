import React, {useState} from 'react'
const initialState=()=>{
  return 10;
}
function App(){
  const [temperatureValue, settemperatureValue] = useState(initialState())
  const [tempratureColor, setTempraturColor] = useState('cold')

  const increment=()=>{
  settemperatureValue(prevCount=>prevCount+1)
  if(temperatureValue===20){
    return settemperatureValue(temperatureValue)
  }
    if (temperatureValue>=15){
      return setTempraturColor('hot')
    }
  }

  const decreament=()=>{
    settemperatureValue(prevCount=>prevCount-1)
    if(temperatureValue<=10){
      settemperatureValue(temperatureValue)
    };
    if (temperatureValue<=15){
      return setTempraturColor('cold')
    } ;
  }

  const ResetFunction = ()=>{
        settemperatureValue(10)
      return  setTempraturColor('cold')
  }
  return(
    <div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${tempratureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={increment}>+</button>
				<button onClick={decreament}>-</button>
			</div>
      <div className='button-container'>
				<button onClick={ResetFunction}>Reset</button>
			</div>
		</div>
  )
}
export default App;
