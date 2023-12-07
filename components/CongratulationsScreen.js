class Congratulations extends HTMLElement {
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
                
                .congratulations {
                    font-size: 1rem;
                    padding: 3rem;
                    border-radius: 10px;
                    background-color: #D0FFD0;
                    max-width: 70%;
                    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.25);
                }

                .congrats-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 3rem;
                }

                .score-info {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 1.5rem;
                }

                button {
                    background-color: #4E7B4D;
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
            </style>
            <div class="congratulations" id="congratulations">
                <h1>YOU WON!</h1>
                <div class="congrats-container">
                    <div class="score-info" id="score-info">
                        <p>YOU GOT</p>
                        <img id="score-image" src="assets/images/8.webp" alt="score-image"/>
                        <p>POINTS!</p>
                    </div>
                    <img src="assets/score-monkey.webp" alt="gameover-image"/>
                </div>
                <button id="playagain-button">Close</button>
            </div>
        `
    }
}

customElements.define('congratulations-screen', Congratulations)
export default Congratulations