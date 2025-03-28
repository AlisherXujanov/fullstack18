import "./style.scss"

function ModalScreen(props) {
    return (
        <section className="modal-screen-wrapper">
            <div className="modal-content">
                <span id="close-modal" onClick={() => { props.handleShowModal(false) }}>&times;</span>
                <h1 className="modal-title">Sign with your wallet</h1>
                <p className="modal-description">Sign Wallet NFT, the secure digital storage for unique assets, take a step towards the future</p>
                <button className="wallet-a">Connect Wallet A</button>
                <button className="wallet-b">Connect Wallet B</button>
                <button className="wallet-c">Connect Wallet C</button>
            </div>
        </section>
    )
}

export default ModalScreen;