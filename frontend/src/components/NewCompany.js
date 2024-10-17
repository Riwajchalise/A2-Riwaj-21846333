import { useState } from 'react'

function NewCompany(props) {
  const { contact, company, setCompany } = props
  const [company_name, setCompanyName] = useState('')
  const [company_address, setCompanyAddress] = useState('')

  async function createCompany(e) {
    e.preventDefault()

    const response = await fetch('http://localhost/api/company/' + contact.id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_name,
        company_address,
      }),
    })

    const data = await response.json()
    console.log(data, '//////////////////////////////////')

    if (data.company_id) {
      setCompany([...company, data])
    }

    setCompanyName('')
    setCompanyAddress('')
  }

  return (
    <form
      onSubmit={createCompany}
      onClick={(e) => e.stopPropagation()}
      className='new-phone'
    >
      <input
        type='text'
        placeholder='Company Name'
        onChange={(e) => setCompanyName(e.target.value)}
        value={company_name}
      />
      <input
        type='text'
        placeholder='Company Address'
        onChange={(e) => setCompanyAddress(e.target.value)}
        value={company_address}
      />

      <button className='button green' type='submit'>
        Add
      </button>
    </form>
  )
}

export default NewCompany
