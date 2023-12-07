class GameOver extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.#render()
    }

    #render() {
        this.shadowRoot.innerHTML = `
            <style>
                .play-button {
                    max-height: 150px;
                    cursor: pointer;
                }
                
                .gameover {
                    font-size: 1rem;
                    padding: 3rem;
                    border-radius: 10px;
                    background-color: #D0FFD0;
                    max-width: 70%;
                    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.25);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .gamover-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 3rem;
                }

                button {
                    background-color: #385837;
                    border: none;
                    color: #e8f8d1;
                    font-size: 1.5rem;
                    border-radius: 5px;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    margin: 0 auto;
                }

                .score-info {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 1.5rem;
                }
            </style>
            <div class="gameover" id="gameover">
                <h1>GAME OVER!</h1>
                <div class="gamover-container">
                    <img src="assets/score-monkey.webp" alt="gameover-image"/>
                    <div class="score-info" id="score-info">
                        <p>YOU GOT</p>
                        <img id="score-image" src="assets/images/5.webp" alt="score-image"/>
                        <p>POINTS!</p>
                    </div>
                </div>
                <button id="playagain-button">Close</button>
            </div>
        `
    }
}

customElements.define('gameover-screen', GameOver)
export default GameOver