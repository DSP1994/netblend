import React from 'react'
import { Spinner } from 'react-bootstrap'
import ImageSpinner from '../design/ImageSpinner.module.css'

const Image = () => {
    const { spinner, src, message } = props
  return (
    <div className={`${styles.ImageSpinner} p-4`}>
        {spinner && <Spinner animation='border' />}
        {src && <img src={src} alt={message} />}
        {message && <p className='mt-4'>{message}</p>}
    </div>
  )
}

export default Image;