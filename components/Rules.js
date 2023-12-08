class Rules extends HTMLElement {
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
                :host {
                    position: absolute;
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    color: #e8f8d1;
                    height: 100dvh;
                    width: 100dvw;
                    background-color: hsla(119, 23%, 10%, 0.7);
                }
                .message {
                    font-size: 1rem;
                    padding: 1.3rem;
                    background-color: hsla(119, 23%, 10%, 0.9);
                    max-width: 70%;
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

                a {
                    color: #4E7B4D;
                    font-weight: bold;
                }

                .howtoplay {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
            </style>
            <div class="message">
                <div class="howtoplay">
                    <div class="text">
                    <h1>How to play</h1>
                        <p>
                            The game is played by dragging the letters to the correct position to spell the word.
                            When the word is spelled correctly, the player will be rewarded with a new word to spell.
                        </p>
                        <p>
                            The player have five lives, and will lose one life for every word that is spelled incorrectly.
                        </p>
                        <p>
                            The player wins when all the words is spelld correctly. The player loses when all lives are lost and the game is over.
                        </p>
                    </div>
                    <img src="assets/howtomove.gif" alt="how to move" />
                </div>
                <button id="close-button">Close</button>
            </div>

            `

		this.shadowRoot
			.querySelector('#close-button')
			.addEventListener('click', () => {
				document.querySelector('rules-screen').style.display = 'none'
				document.querySelector('game-settings').style.display = 'flex'
			})
	}
}
customElements.define('rules-screen', Rules)
export default Rules
