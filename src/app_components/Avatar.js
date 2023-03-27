import React from 'react'
import styles from '../design/Avatar.module.css'

const Avatar = (props) => {
    const {src, height=35, text} = props;
  return (
    <span>
        <img 
            className={styles.Avatar}
            src={src}
            height={height}
            width={height}
            alt='profile'
        />
        {text}
        
    </span>
  )
}

export default Avatar