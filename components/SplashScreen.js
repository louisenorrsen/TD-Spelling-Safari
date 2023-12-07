class SplashScreen extends HTMLElement {
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
                    color: hsla(119, 23%, 40%);
                    font-size: 1.5rem;
                    height: 100dvh;
                    width: 100dvw;
                    background-color: hsla(119, 23%, 10%, 0.7);
                    background-image: url('assets/game_screen.webp');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 100%;
                }

                .loader {
                    border: 10px solid #f3f3f3;
                    border-top: 10px solid hsla(119, 23%, 40%);
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    animation: spin 2s linear infinite;
                }
                  
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div class="loader"></div>
            Loading...
        `
	}
}

customElements.define('splash-screen', SplashScreen)
export default SplashScreen
