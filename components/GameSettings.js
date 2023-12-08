class GameSettings extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.language = ''
	}

	connectedCallback() {
		this.#render()
	}

	#render() {
		this.shadowRoot.innerHTML = `
        <style>
            .play-button {
                height: 70px;
                margin-top: 50px;
                cursor: pointer;
                display: none;
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
            }

            .button-container {
                display: none;
                justify-content: space-around;
                gap: 10px;
                padding: 10px;
            }

            .flag-button {
                height: 50px;
                cursor: pointer;
            }

            .language-chooser {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 50px;
                padding: 20px;
                font-size: 1.5rem;
            }

            @media screen and (max-width: 768px) {
                .play-button {
                    max-height: 15%;
                }
                button {
                    height: 70%;
                    font-size: 1rem;
                }
            }
            @media screen and (max-width: 400px) {
                .play-button {
                    max-height: 5%;
                }
                button {
                    height: 50%;
                    font-size: 0.8rem;
                }
            }
        </style>
        <div class="language-chooser">
            Choose language
            <div>
                <img src="./assets/swedish.svg" alt="swedish flag" id="swedish-flag" class="flag-button">
                <img src="./assets/english.webp" alt="english flag" id="english-flag" class="flag-button">
            </div>
        </div>
        <img class="play-button" id="play-button" src="./assets/safariknapp.svg" alt="play button">
        <div class='button-container'>
            <button id="about-button">About</button>
            <button id="rules-button">Rules</button>
        </div>
        `

		this.shadowRoot
			.querySelector('#play-button')
			.addEventListener('click', () => {

                document.getElementById('splash-screen').style.display = 'flex'
				document.getElementById('game-settings').style.display = 'none'

                const fetchDataPromise = fetch(`assets/words/${this.language}.json`)
					.then((response) => response.json())

                const delayPromise = new Promise(resolve => setTimeout(resolve, 5000))
				
                Promise.all([fetchDataPromise, delayPromise])
					.then(([data]) => {
						const event = new CustomEvent('updateWords', {
							detail: { words: data }
						})
						document.dispatchEvent(event)

                        document.getElementById('splash-screen').style.display = 'none'
                        document.getElementById('game-screen').style.display = 'flex'
					})
					.catch((error) => {
						console.error('Error fetching data:', error)
					})
			})

		this.shadowRoot
			.querySelector('#about-button')
			.addEventListener('click', () => {
				document.getElementById('about-screen').style.display = 'flex'
			})

		this.shadowRoot
			.querySelector('#rules-button')
			.addEventListener('click', () => {
				document.getElementById('rules-screen').style.display = 'flex'
			})

		this.shadowRoot
			.querySelector('#swedish-flag')
			.addEventListener('click', () => {
				this.language = 'swedish'
				this.shadowRoot.querySelector(
					'.language-chooser'
				).style.display = 'none'
				this.shadowRoot.querySelector('#play-button').style.display = 'flex'
                this.shadowRoot.querySelector('.button-container').style.display = 'flex'
			})

		this.shadowRoot
			.querySelector('#english-flag')
			.addEventListener('click', () => {
				this.language = 'english'
				this.shadowRoot.querySelector(
					'.language-chooser'
				).style.display = 'none'
				this.shadowRoot.querySelector('#play-button').style.display = 'flex'
                this.shadowRoot.querySelector('.button-container').style.display = 'flex'
			})
	}
}

customElements.define('game-settings', GameSettings)
export default GameSettings
