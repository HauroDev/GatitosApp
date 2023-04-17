import { useEffect, useState } from 'react'
import { getRamdomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
