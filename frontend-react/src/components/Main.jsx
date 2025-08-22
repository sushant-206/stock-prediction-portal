import React from 'react'
import { Button } from './Button'
import { Header } from './Header'
import { Footer } from './Footer'

export const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>This stock prediction portal uses 100-day and 200 day moving averages</p>
                <Button text = "Login" class = "btn-outline-warning"/>
            </div>

        </div>
    </>
  )
}
