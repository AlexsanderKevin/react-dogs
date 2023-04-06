import React from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsform = ({ id, setComments, single }) => {
  const [ comment, setComment ] = React.useState('')
  const { request, error } = useFetch()

  const handleSubmit = async event => {
    event.preventDefault()
    const { url, options } = COMMENT_POST( id, {comment} )
    const { response, json } = await request( url, options )

    if( response.ok ) {
      setComment('')
      setComments( comments => [...comments, json])
    }
  }

  return (
    <form 
      onSubmit={ handleSubmit }
      className={`
        ${styles.form}
        ${ single ? styles.single : '' }
      `} 
    >
      <textarea
        className={ styles.textarea }
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={ comment } 
        onChange={({ target }) => setComment( target.value )}
      />

      <button className={ styles.button }>
        <Enviar />
      </button>
      <Error error={ error }/>
    </form>
  )
}

export default PhotoCommentsform
