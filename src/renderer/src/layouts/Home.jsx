import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../App'
import { Sidebar } from './Sidebar'
import { Dash } from './Dash'
import { PasswordManager } from './Passwordmanager'
import { Notes } from './Notes'

export function Home() {
  const navigate = useNavigate()
  const [content, setContent] = useState('Dash')
  const [sessionData, setSessionData] = useState(null)

  const handleContent = (value) => {
    setContent(value)
  }

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      const { dataUser } = await supabase.auth.getUser()
      setSessionData(dataUser)
      if (!data) {
        navigate('./login')
      }
    }
    checkSession()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('./login')
      }
    })
    return () => subscription.unsubscribe()
  }, [navigate])

  return (
    <>
      {console.log('component rendered: HomePage')}
      {console.log(sessionData)}
      <div className="home">
        <Sidebar handleContent={handleContent} />
        <div className="home__content">
          <div className="home__content--titleBar"></div>
          {content == 'Dash' && <Dash />}
          {content == 'PasswordManager' && <PasswordManager />}
          {content == 'Notes' && <Notes />}
        </div>
      </div>
    </>
  )
}
