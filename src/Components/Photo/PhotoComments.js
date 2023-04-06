import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsform from './PhotoCommentsform'
import styles from './PhotoComments.module.css'

const PhotoComments = props => {
  const [ comments, setComments ] = React.useState(() => props.comments)
  const commentSection = React.useRef( null )
  const { login } = React.useContext( UserContext )

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [ comments ])

  return (
    <>
      <ul 
        ref={ commentSection } 
        className={`
          ${styles.comments}
          ${ props.single ? styles.single : '' }
        `}>

        { comments.map( comment => (
          <li key={ comment.comment_ID }>
            <b>{ comment.comment_author }:</b>
            <span>{ comment.comment_content }</span>
          </li>
        ))}
      </ul>
      { login && (
        <PhotoCommentsform 
          id={ props.id } 
          single={ props.single }
          setComments={ setComments }/> 
      )}
    </>
  )
}

export default PhotoComments
