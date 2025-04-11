import { supabase } from '../App'
import { Titlebar } from '../components/Titlebar'
import HomeIcon from '../assets/images/icons/icon_home.svg'
import LockIcon from '../assets/images/icons/icon_lock.svg'
import DoorIcon from '../assets/images/icons/icon_logout.svg'

export function Sidebar({ handleContent }) {
  const signOutSession = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      console.log(error)
      // navigate('/authentication')
    } catch (err) {
      console.log('Error ', err)
    }
  }

  return (
    <div className="sidebar">
      {console.log('Home Sidebar Rendered')}
      <Titlebar />
      <div className="sidebar__content">
        <button className="sidebar__contentItem" onClick={() => handleContent('Dash')}>
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </button>
        <button className="sidebar__contentItem" onClick={() => handleContent('PasswordManager')}>
          <img src={LockIcon} alt="" />
          <p>Password Manager</p>
        </button>
        <button className="sidebar__contentItem">Home</button>
        <button className="sidebar__contentItem">Inbox</button>
        <button className="sidebar__contentItem">Settings</button>
        <button className="sidebar__contentItem" onClick={signOutSession}>
          <img src={DoorIcon} alt="" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  )
}
