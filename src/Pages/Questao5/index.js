function Questao5() {
    return (
        <div className="Questao5">
            <h1>Troca de mensagem</h1>
            <p>Esta é a mensagem inicial.</p>
            <button onClick={trocarMensagem}>Trocar Mensagem</button>
        </div>
    );
}

function trocarMensagem() {
    const p = document.querySelector('.Questao5 p');
    p.textContent = 'Esta é a nova mensagem!';
}

export default Questao5;