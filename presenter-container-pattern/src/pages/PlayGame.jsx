import React from 'react'
import {  useLocation } from 'react-router'

const PlayGame = () => {
  const data = useLocation()
  return (
    <div>{data.state.wordSelected}</div>
  )
}

export default PlayGame