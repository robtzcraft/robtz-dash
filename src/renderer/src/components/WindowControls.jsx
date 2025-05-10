export default function WindowControls() {
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
        <div className="window__controls">
            <button className="window__controls--close" onClick={handleClose}></button>
            <button className="window__controls--minimize" onClick={handleMinimize}></button>
            <button className="window__controls--maximize" onClick={handleMaximize}></button>
        </div>
    )
}