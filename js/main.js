let arrayOfWords
let currentWord
let arrayOfShuffledLetters
let score = 0
let lives = 5
let gameImage = document.getElementById('game-image')
let draggableContainer = document.getElementById('draggables')
let placeholderContainer = document.getElementById('placeholders')
let tryagainButton = document.getElementById('tryagain-button')
let nextButton = document.getElementById('next-button')
let congratulations = document.getElementById('congratulations')
let playAgainAfterWin = document.querySelector('congratulations-screen').shadowRoot.querySelector('#playagain-button')
let playAgainAfterGameOver = document.querySelector('gameover-screen').shadowRoot.querySelector('#playagain-button')
let scoreContainer = document.getElementById('score')
let scoreInfo = document.querySelector('congratulations-screen').shadowRoot.querySelector('#score-info')

const checkIfOutOfLives = () => {
	if (lives === 0) {
		document.querySelector('gameover-screen').shadowRoot.querySelector('#score-info').innerHTML = `<p>YOU GOT</p>
			<img id="score-image" src="assets/images/${score}.webp" alt="score-image"/>
			<p>POINTS!</p>`
		document.querySelector('gameover-screen').style.display = 'flex'
	}
}

const checkIfCorrect = () => {
	let placeholders = document.getElementById('placeholders').children
	let correctLetters = 0

	for (let i = 0; i < placeholders.length; i++) {
		const placeholderLetter =
			placeholders[i].children[0].textContent.toLowerCase()
		const currentWordLetter = currentWord[i].toLowerCase()

		if (placeholderLetter === currentWordLetter) {
			correctLetters++
			placeholders[i].children[0].style.backgroundColor = '#9EC082'
		} else {
			placeholders[i].children[0].style.backgroundColor = '#db6c6c'
		}
	}
	if (correctLetters === currentWord.length && arrayOfWords.length > 1) {
		tryagainButton.style.display = 'block'
		nextButton.style.display = 'block'
		score++
		scoreContainer.textContent = `SCORE: ${score}`

		const indexToRemove = arrayOfWords.findIndex(
			(wordObject) => wordObject.word === currentWord
		)

		if (indexToRemove !== -1) {
			arrayOfWords.splice(indexToRemove, 1)
		}
	} else if (
		correctLetters === currentWord.length &&
		arrayOfWords.length === 1
	) {
		document.querySelector('congratulations-screen').style.display = 'flex'
		score++
		scoreInfo.innerHTML = `YOU GOT
			<img id="score-image" src="assets/images/${score}.webp" alt="score-image"/>
			<p>POINTS!</p>`
	} else {
		lives--
		document.querySelector('#lives').textContent = `Lives: ${lives}`
		tryagainButton.style.display = 'block'
		checkIfOutOfLives()
	}
}

const dragOverPlaceholder = (event) => {
	event.preventDefault()
}

const onDropAllowedArea = (event) => {
	event.preventDefault()
	let data = event.dataTransfer.getData('text')
	if (
		event.target.children.length === 0 &&
		event.target.className === 'placeholder'
	) {
		event.target.appendChild(document.getElementById(data))
	}
	if (draggableContainer.children.length === 0) {
		checkIfCorrect()
	}
}

const onDragStartDraggingItem = (event) => {
	setTimeout(() => {
		event.target.style.display = 'none'
	}, 0)
	event.dataTransfer.setData('text', event.target.id)
}

const onDragEndDraggingItem = (event) => {
	event.target.style.display = 'flex'
}

const chooseWord = () => {
	let randomIndex = Math.floor(Math.random() * arrayOfWords.length)
	return arrayOfWords[randomIndex].word
}

const shuffleLetters = (word) => {
	let shuffledWord = word.split('').sort(() => Math.random() - 0.5)
	return shuffledWord
}

const setupGameBoard = () => {
	gameImage.src = `assets/images/${
		arrayOfWords.find((wordObj) => wordObj.word === currentWord).image
	}`
	placeholderContainer.innerHTML = ''
	draggableContainer.innerHTML = ''
	tryagainButton.style.display = 'none'
	nextButton.style.display = 'none'

	for (let i = 0; i < currentWord.length; i++) {
		let placeholder = document.createElement('div')
		placeholder.className = 'placeholder'
		placeholder.id = `placeholder-${i}`
		placeholder.addEventListener('dragover', dragOverPlaceholder)
		placeholder.addEventListener('drop', onDropAllowedArea)
		document.getElementById('placeholders').appendChild(placeholder)
	}

	for (let i = 0; i < currentWord.length; i++) {
		let letter = document.createElement('div')
		letter.className = 'draggable'
		letter.id = `letter-${i}`
		letter.draggable = true
		letter.addEventListener('dragstart', onDragStartDraggingItem)
		letter.addEventListener('dragend', onDragEndDraggingItem)
		letter.textContent = arrayOfShuffledLetters[i].toUpperCase()
		document.getElementById('draggables').appendChild(letter)
	}
}

const newRound = () => {
	currentWord = chooseWord()
	arrayOfShuffledLetters = shuffleLetters(currentWord)
	setupGameBoard()
}

tryagainButton.addEventListener('click', () => {
	setupGameBoard()
})
nextButton.addEventListener('click', () => {
	newRound()
})
playAgainAfterWin.addEventListener('click', () => {
	document.querySelector('congratulations-screen').style.display = 'none'
	document.querySelector('game-screen').style.display = 'none'
	location.reload()
})
playAgainAfterGameOver.addEventListener('click', () => {
	document.querySelector('gameover-screen').style.display = 'none'
	document.querySelector('game-screen').style.display = 'none'
	location.reload()
})

document.addEventListener('updateWords', (event) => {
    arrayOfWords = event.detail.words
    console.log('Words are fetched!', arrayOfWords)
    newRound()
})
