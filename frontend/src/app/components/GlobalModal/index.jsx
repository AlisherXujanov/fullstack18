import "./style.scss"

function GlobalModal(props) {
    return (
        <section className="global-modal-wrapper">
            <div className="global-modal-content">
                <span id="close-global-modal" onClick={(e) => { props.handleShowModal(e, false) }}>
                    &times;
                </span>
                {props.children}
            </div>
        </section>
    )
}
export default GlobalModal;