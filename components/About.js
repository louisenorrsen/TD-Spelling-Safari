class About extends HTMLElement {
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
                    color: #FFF;
                    font-weight: bold;
                  }
            </style>
            <div class="message">
                <div class="text">
                    <h1>
                        Welcome to TD Spelling Safari!
                    </h1>
                    <p>
                        This game is developed as a part of a course in software development at Mölk.
                        The purpose of the game is to help children practice how to spell.
                    </p>
                    <h2>
                        Design
                    </h2>
                    <p>
                        The word images are taken from <a href="https://www.pixabay.com" target="_blank">Pixabay</a> 
                        and the game design is created with <a href="https://www.canva.com" target="_blank">Canva</a>.  
                    </p>
                    <h2>
                        Developer
                    </h2>
                    <p> 
                        Louise Norrsén 
                    </p>
                    <h2>
                        Contact
                    </h2>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/louisenorrsen" target="_blank">Louise Norrsén</a>
                    </p>
                    <p>
                        Thank you for playing TD Spelling Safari, and I hope you have an amazing time!
                </div>
                <button id="close-button">Close</button>
            </div>

            `

		this.shadowRoot
			.querySelector('#close-button')
			.addEventListener('click', () => {
				document.getElementById('about-screen').style.display = 'none'
				document.getElementById('game-settings').style.display = 'flex'
				
			})
	}
}
customElements.define('about-screen', About)
export default About
