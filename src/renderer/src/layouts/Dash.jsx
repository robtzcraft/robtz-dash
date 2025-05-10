
import { useEffect, useState } from "react";
import { supabase } from "../App"

export function Dash() {

  const [ sessionData, setSessionData ] = useState(null)

  useEffect( () => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSessionData(data.session.user.email)
    }
    checkSession();
  })

  return (
    <>
      <div className="">
        <p>Hello world</p>
      </div>
    </>
  )
}
