import React from 'react'
import NoResults from '../images/no-results.jpg'
import styles from '../design/NotFound.module.css'
import ImageSpinner from './ImageSpinner'

const NotFound = () => {
  return (
      <div className={styles.NotFoundImage}>
        <ImageSpinner 
            src={NoResults}
            message={"Our sincerest apologies, the page you're looking for does not exist. Please use the NavBar to head back to the good stuff!"}
         />
      </div>
  )
}

export default NotFound