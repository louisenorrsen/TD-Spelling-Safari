class GameScreen extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.#render()
	}

	#render() {
		this.innerHTML = `
        <style>
            .row {
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;
            }

            .game-image {
                width: 50%;
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #game-image {
                width: 150px;
                height: auto;
            }

            .placeholders {
                display: flex;
                gap: 20px;
                margin: 20px;
            }

            .placeholder {
                height: 80px;
                width: 80px;
                outline: 2px dashed #17271a;
            }

            .draggables {
                display: flex;
                gap: 20px;
                margin: 20px;
                height: 100px;
            }
            
            .draggable {
                height: 80px;
                width: 80px;
                background-color:#926c63;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: move;
                box-shadow: 8px 8px 10px hsla(0, 0%, 0%, 0.2);
                color:  #17271a;
                font-size: 3rem;
            }

            .game-buttons {
                height: 90px;
                display: flex;
                overflow: hidden;
                margin-bottom: 100px;
            }

            .game-button {
                height: 100%;
                cursor: pointer;
                margin: 20px;
                display: none;
            }

            .play-button {
                max-height: 150px;
                margin-top: 50px;
                cursor: pointer;
            }

            .stats {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            
            .score {
                color: #17271a;
                font-size: 2rem;
            }

            .lives {
                color: #17271a;
                font-size: 2rem;
            }

        </style>
        <div class="stats">
            <div class="score" id="score">SCORE: 0</div>
            <div class="lives" id="lives">Lives: 5</div>
        </div>
        <div class="row" id="row">
            <div class="game-image">
                <img id="game-image" src="assets/images/apa.svg" alt="game image">
            </div>
            <div class="game-board" id="game-board">
                <div class="placeholders" id="placeholders">
                </div>
                <div class="draggables" id="draggables">
                </div>
            </div>
        </div>
        <div class="game-buttons" id="game-buttons">
            <img class="game-button" id="tryagain-button" src="assets/tryagain_button.svg" alt="try again button">
            <img class="game-button" id="next-button" src="assets/next_button.svg" alt="next button">
        </div>
        
      `
	}
}
customElements.define('game-screen', GameScreen)
