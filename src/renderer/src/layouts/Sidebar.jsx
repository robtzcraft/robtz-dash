import { supabase } from '../App'
import { Titlebar } from '../components/Titlebar'
import HomeIcon from '../assets/images/icons/icon_home.svg'
import LockIcon from '../assets/images/icons/icon_lock.svg'
import DoorIcon from '../assets/images/icons/icon_logout.svg'
import SettingsIcon from '../assets/images/icons/icon_settings.svg'
import FilesIcon from '../assets/images/icons/icon_file.svg'
import TaskIcon from '../assets/images/icons/icon_checkbox.svg'

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
          <img src={TaskIcon} alt="" />
          <p>Tasks</p>
        </button>
        <button className="sidebar__contentItem" onClick={() => handleContent('PasswordManager')}>
          <img src={LockIcon} alt="" />
          <p>Notifications</p>
        </button>
        <button className="sidebar__contentItem" onClick={() => handleContent('PasswordManager')}>
          <img src={LockIcon} alt="" />
          <p>Password Manager</p>
        </button>
        <button className="sidebar__contentItem" onClick={() => handleContent('Notes')}>
          <img src={FilesIcon} alt="" />
          <p>Notes</p>
        </button>
        <button className="sidebar__contentItem" onClick={() => handleContent('Settings ')}>
          <img src={SettingsIcon} alt="" />
          <p>Settings</p>
        </button>
        <button className="sidebar__contentItem" onClick={signOutSession}>
          <img src={DoorIcon} alt="" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  )
}
