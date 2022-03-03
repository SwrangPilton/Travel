import { Modal, Button } from 'react-bootstrap'

export default function TourModal(props) {
    return (
        <Modal
            {...props}
            centered
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    TITLE
                </Modal.Title> */}
            </Modal.Header>
            <Modal.Body style={{ height: '500px' }}>
                <img src={`${props.ModalImg}`} style={{ height: '100%', width: '100%', objectFit:'contain' }} alt="modal" />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
