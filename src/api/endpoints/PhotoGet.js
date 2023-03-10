import React from 'react'

const PhotoGet = () => {
  const [ id, setId ] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then( res => {
        console.log( res )
        return res.json()
      })
      .then( json => console.log( json ))
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type='text' value={ id } onChange={({ target }) => setId( target.value )}/>
      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet
