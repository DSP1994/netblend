import React from 'react'
import { Spinner } from 'react-bootstrap'
import styles from '../design/ImageSpinner.module.css'

const ImageSpinner = ({spinner, src, message}) => {
  return (
    <div className={`${styles.ImageSpinner} p-4`}>
        {spinner && <Spinner animation='border' />}
        {src && <img src={src} alt={message} />}
        {message && <p className='mt-4'>{message}</p>}
    </div>
  )
}

export default ImageSpinner;