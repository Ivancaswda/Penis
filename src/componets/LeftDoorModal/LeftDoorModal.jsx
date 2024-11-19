import ReactDom from 'react-dom'
import './LeftDoorModal.css'


export function LeftDoorModal(props) {
    const {children, handleCloseDoorModal} = props

    return ReactDom.createPortal(
        <div className='left-door-side-container-door'>
        <button onClick={handleCloseDoorModal} className='modal-underlay-door'></button>
            <div className='modal-content-door'>
                {children}
            </div>
        </div>,

        document.getElementById('leftDoor')
    )



}