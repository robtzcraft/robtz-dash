import { useState, useRef, useEffect, useCallback } from 'react'
import { supabase } from '../App'
import IconTrash from '../assets/images/icons/icon_trash.svg'

export function PasswordManager() {
  const inputSearch = useRef()
  const [passwords, setPasswords] = useState([]) // Crea un estado para almacenar los mensajes

  const fetchData = useCallback(async () => {
    try {
      const searchValue = inputSearch.current ? inputSearch.current.value : ''
      const { data, error } = await supabase
        .from('passwordmanager')
        .select('')
        .eq('passwordvisibility', true)
        .ilike('passwordtitle', `%${searchValue}%`)
      //.limit(10);
      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setPasswords(data) // Actualiza el estado con los datos recuperados
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }, [])

  async function deleteDataItem(identifier) {
    try {
      const { data, error } = await supabase
        .from('passwordmanager')
        .update({
          passwordvisibility: false
        })
        .eq('id', identifier)
      if (error) {
        throw error
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleSearch = (e) => {
    if (e.key == 'Enter') {
      fetchData()
    }
  }

  return (
    <div className="password__manager">
      <div className="password__manager--searchbar">
        <input ref={inputSearch} type="text" placeholder="Search..." onKeyDown={handleSearch} />
      </div>
      <div className="password__manager--header">
        <p>Password</p>
        <p></p>
      </div>
      <div className="password__manager--items">
        {console.log('Componente renderizandose')}
        <h2>Password Manager</h2>
        {passwords.length > 0 ? (
          <ul className="dash__data">
            {passwords.map((password) => (
              <li className="dash__data--item" key={password.id}>
                <div className="password__item">
                  <div className="password__item--sectionA">
                    <p className="password__item--title">{password.passwordtitle}</p>
                    <p className="password__item--password">{password.passwordvalue}</p>
                  </div>
                  <p className="password__item--delete">{password.passwordemail}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(password.passwordvalue)
                    }}
                  >
                    Copy password
                  </button>
                  <button
                    className='delete__button'
                    onClick={() => {
                      deleteDataItem(password.id)
                    }}
                  >
                    <img src={IconTrash} alt="alt" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay mensajes.</p>
        )}
      </div>
    </div>
  )
}
