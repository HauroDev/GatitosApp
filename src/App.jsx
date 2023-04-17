import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// import Otro from './components/Otro'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }
  const textImage = fact?.split(' ', 3).join(' ')
  const textContinue = fact?.split(' ').slice(3).join(' ')

  return (
    <div className='catInfo'>
      <h1 className='catInfo__title'>App Gatitos</h1>
      <button className='catInfo__refresh' onClick={handleClick}>Get new fact</button>
      <div className='catInfo__contain'>
        {fact && <p className='catInfo__contain__paragraph'><span className='catInfo__contain_paragraph catInfo__contain__paragraph--active'>{textImage}</span> {textContinue}</p>}
        {imageUrl && <img className='catInfo__contain__image' src={`${imageUrl}`} alt={`image extracted using the firs three words for ${fact}`} />}
      </div>
    </div>
  )
}

export default App
