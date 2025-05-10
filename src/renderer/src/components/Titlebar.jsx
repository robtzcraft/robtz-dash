import MenuIcon from '../assets/images/icons/icon_menu_dark.svg'
import WindowControls from './WindowControls'

export function Titlebarlogin() {
  return (
    <div className="titlebar__login">
      <WindowControls />
      <div className="titlebar__login__title"></div>
      <div className="titlebar__login__options">
        <button>
          <img src={MenuIcon} alt="alt" />
        </button>
      </div>
    </div>
  )
}

export function Titlebar() {
  const handleMinimize = () => {
    window.api.windowControls.minimize()
  }
  const handleMaximize = () => {
    window.api.windowControls.maximize()
  }
  const handleClose = () => {
    window.api.windowControls.close()
  }
  return (
    <>
      <div className="titlebar">
        <div className="titlebar__login__controls">
          <button className="close" onClick={handleClose}></button>
          <button className="minimize" onClick={handleMinimize}></button>
          <button className="maximize" onClick={handleMaximize}></button>
        </div>
      </div>
    </>
  )
}
