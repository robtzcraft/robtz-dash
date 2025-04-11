import { Route, Routes } from 'react-router'
import { createClient } from '@supabase/supabase-js'
import { Login } from './layouts/Login'
import { Home } from './layouts/Home'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKEY = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseURL, supabaseKEY)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes element={<Home />}>
        <Route path="/app/home" />
        <Route path="/app/passwordmanager" />
        <Route path="/app/home" />
        <Route path="/app/home" />
      </Routes>
    </>
  )
}

export default App
