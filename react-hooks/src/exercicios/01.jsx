import * as React from 'react'

function Greeting({initialName}) {
  const [name, setName] = React.useState(
    ()=>{window.localStorage.setItem('name') ?? initialName
})

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        <input 
          onChange={handleChange} 
          id="name" value={name}
          placeholder="Informe seu nome aqui"
        />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio01() {
  return <Greeting initialName="Turíbio" />
}

export default Exercicio01