function ModalNovo({open, onClose, setObjavaModalOpen}) {
  if (!open) return null
  return (
    <div className='modal-novo' onClick={onClose}>
    <div className="modal-objava modal-sredina gumb" onClick={setObjavaModalOpen}><i className="uil uil-notes"></i><p>Nova objava</p></div>
    <div className="modal-dodaj-korisnika modal-sredina gumb"><i className="uil uil-user-plus"></i><p>Dodaj korisnika</p></div>
    </div>
  )
}

export default ModalNovo