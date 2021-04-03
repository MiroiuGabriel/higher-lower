// const rightSidePoints = document.querySelector('.points.right');
// const higherButton = document.querySelector('.higher');
// const lowerButton = document.querySelector('.lower');
// const score = document.querySelector('.score-points');
// const highscore = document.querySelector('.high-score-points');
// const retryBtn = document.querySelector('.retry');
// const modal = document.querySelector('.modal');
// retryBtn.addEventListener('click', () => {
// 	modal.classList.remove('show');
// 	document.body.innerHTML = `<div class="modal">
// 			<div class="modal-children">
// 				<h1 class="title">Ooops Looks like you've lost</h1>
// 				<button class="btn retry">Retry</button>
// 			</div>
// 		</div>
// 		<div class="versus-container">
// 			<div class="versus">VS</div>
// 		</div>
// 		<div class="score-container">
// 			<div class="highscore">High Score: <span class="high-score-points">${highscore.textContent}</div>
// 			<div class="score">Score: <span class="score-points">0</div>
// 		</div>
// 		<div id="initial-slide" class="left-sl">
// 			<div class="game-controller">
// 				<h1 class="title left">
// 					<span class="quote start">“</span>Slacklining<span
// 						class="quote end"
// 						>”</span
// 					>
// 				</h1>
// 				<p class="has">has</p>
// 				<h1 class="points left">22,200</h1>
// 				<p class="searches left">average monthly searches</p>
// 			</div>
// 		</div>
// 		<div id="initial-slide" class="right-sl">
// 			<div class="game-controller">
// 				<h1 class="title right">
// 					<span class="quote start">“</span>United Airlines<span
// 						class="quote end"
// 						>”</span
// 					>
// 				</h1>
// 				<p class="has">has</p>
// 				<div class="higher-lower">
// 					<button class="btn higher">
// 						Higher <i class="fas fa-caret-up up"></i>
// 					</button>
// 					<button class="btn lower">
// 						Lower <i class="fas fa-caret-down down"></i>
// 					</button>
// 				</div>
// 				<h1 class="points right">0</h1>
// 				<p class="searches right">searches than “Slacklining”</p>
// 			</div>
// 		</div>
// `;
// });
// const temp = [];
// const shufflleSlides = [
// 	{
// 		title: 'Adele',
// 		image:
// 			"url('http://api.higherlowergame.com/_client/images/general/adele.jpg')",
// 		searches: 2240000,
// 	},
// 	{
// 		title: 'Monaco Grand Prix',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/monaco-grand-prix.jpg")',
// 		searches: 49500,
// 	},
// 	{
// 		title: 'David',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/david-cameron.jpg")',
// 		searches: 135000,
// 	},
// 	{
// 		title: 'The Pill',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/the-pill.jpg")',
// 		searches: 33100,
// 	},
// 	{
// 		title: 'Barry Manilow',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/barry-manilow.jpg")',
// 		searches: 301000,
// 	},
// 	{
// 		title: 'Wii Sports',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/wii-sports.jpg")',
// 		searches: 49500,
// 	},
// 	{
// 		title: 'Burger King',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/burger-king.jpg")',
// 		searches: 6120000,
// 	},
// 	{
// 		title: 'Canoeing',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/canoeing.jpg")',
// 		searches: 90500,
// 	},
// 	{
// 		title: 'Paul Mccartney',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/paul-mccartney.jpg")',
// 		searches: 823000,
// 	},
// 	{
// 		title: 'Air Hockey',
// 		image:
// 			'url("http://api.higherlowergame.com/_client/images/general/air-hockey.jpg")',
// 		searches: 110000,
// 	},
// ];
// function getSlideData() {
// 	const data =
// 		shufflleSlides[Math.floor(Math.random() * (shufflleSlides.length - 1))];
// 	if (temp.includes(data)) {
// 		return getSlideData();
// 	} else {
// 		temp.push(data);
// 		return data;
// 	}
// }
// function createSilde() {
// 	const initialSlide = document.createElement('div');
// 	const slideData = getSlideData();

// 	const prevTitle = document
// 		.querySelector('.game-controller .title')
// 		.textContent.split(' ')
// 		.map(word => word.trim())
// 		.join(' ');
// 	initialSlide.id = 'initial-slide';
// 	initialSlide.classList.add('right-sl');
// 	initialSlide.style.backgroundImage = slideData.image;

// 	const gameController = document.createElement('div');
// 	gameController.classList.add('game-controller');

// 	const mostSearchedTitle = document.createElement('h1');
// 	mostSearchedTitle.classList.add('title');
// 	mostSearchedTitle.classList.add('right');
// 	mostSearchedTitle.innerHTML = `<span class="quote start">“</span>${slideData.title}<span
// 						class="quote end"
// 						>”</span
// 					>`;
// 	gameController.append(mostSearchedTitle);

// 	const has = document.createElement('p');
// 	has.classList.add('has');
// 	has.textContent = 'has';

// 	gameController.append(has);

// 	const higherLower = document.createElement('div');
// 	higherLower.classList.add('higher-lower');

// 	const addToNumber = slideData.searches > 400000 ? 10000 : 1000;

// 	const higher = document.createElement('button');
// 	higher.innerHTML = 'Higher <i class="fas fa-caret-up up"></i>';
// 	higher.classList.add('btn');
// 	higher.classList.add('higher');
// 	higher.addEventListener('click', () => {
// 		const container = document.querySelector('.higher-lower');
// 		container.remove();
// 		const rightSidePoints = document.querySelectorAll('.points.right')[1];
// 		rightSidePoints.classList.add('show');

// 		const id = setInterval(() => {
// 			let number =
// 				Number(rightSidePoints.textContent.replace(/\D/g, '')) +
// 				addToNumber;
// 			if (number >= slideData.searches) {
// 				clearInterval(id);
// 				const leftSlideNumber = Number(
// 					document
// 						.querySelectorAll('.points.right')[0]
// 						.textContent.replace(/\D/g, '')
// 				);
// 				const timeoutId = setTimeout(() => {
// 					if (leftSlideNumber <= number) {
// 						score.textContent = +score.textContent + 1;

// 						if (shufflleSlides.length - 1 === temp.length - 1) {
// 							document.querySelector(
// 								'.modal-children .title'
// 							).textContent = "Good Job! You've won";
// 							document.querySelector(
// 								'.modal-children .retry'
// 							).textContent = 'Replay';
// 							document
// 								.querySelector('.modal')
// 								.classList.add('show');
// 							return;
// 						}

// 						document.querySelectorAll('.right-sl')[0].remove();
// 						document.querySelector('.searches').textContent =
// 							'average monthly searches';
// 						clearTimeout(timeoutId);

// 						createSilde();
// 					} else {
// 						if (+score.textContent > +highscore.textContent) {
// 							highscore.textContent = score.textContent;
// 						}
// 						document.querySelector('.modal').classList.add('show');
// 					}
// 				}, 500);
// 			}
// 			rightSidePoints.textContent = number.toLocaleString();
// 		}, 5);
// 	});

// 	const lower = document.createElement('button');
// 	lower.innerHTML = 'Lower <i class="fas fa-caret-down down"></i>';
// 	lower.classList.add('btn');
// 	lower.classList.add('lower');

// 	lower.addEventListener('click', () => {
// 		const container = document.querySelector('.higher-lower');
// 		container.remove();
// 		const rightSidePoints = document.querySelectorAll('.points.right')[1];
// 		rightSidePoints.classList.add('show');

// 		const id = setInterval(() => {
// 			let number =
// 				Number(rightSidePoints.textContent.replace(/\D/g, '')) +
// 				addToNumber;

// 			if (number >= slideData.searches) {
// 				clearInterval(id);
// 				const leftSlideNumber = Number(
// 					document
// 						.querySelectorAll('.points.right')[0]
// 						.textContent.replace(/\D/g, '')
// 				);
// 				const timeoutId = setTimeout(() => {
// 					if (leftSlideNumber >= number) {
// 						score.textContent = +score.textContent + 1;

// 						if (shufflleSlides.length - 1 === temp.length - 1) {
// 							document.querySelector(
// 								'.modal-children .title'
// 							).textContent = "Good Job! You've won";
// 							document.querySelector(
// 								'.modal-children .retry'
// 							).textContent = 'Replay';
// 							document
// 								.querySelector('.modal')
// 								.classList.add('show');
// 							return;
// 						}

// 						document.querySelectorAll('.right-sl')[0].remove();
// 						document.querySelector('.searches').textContent =
// 							'average monthly searches';
// 						clearTimeout(timeoutId);

// 						createSilde();
// 					} else {
// 						if (+score.textContent > +highscore.textContent) {
// 							highscore.textContent = score.textContent;
// 						}
// 						document.querySelector('.modal').classList.add('show');
// 					}
// 				}, 500);
// 			}
// 			rightSidePoints.textContent = number.toLocaleString();
// 		}, 5);
// 	});

// 	higherLower.append(higher);
// 	higherLower.append(lower);

// 	gameController.append(higherLower);

// 	const points = document.createElement('h1');
// 	points.classList.add('points');
// 	points.classList.add('right');
// 	points.textContent = '0';

// 	gameController.append(points);

// 	const searches = document.createElement('p');
// 	searches.classList.add('searches');
// 	searches.classList.add('right');
// 	searches.textContent = `searches than ${
// 		document.querySelector('.game-controller .title').textContent
// 	}`;
// 	gameController.append(searches);
// 	initialSlide.append(gameController);
// 	document.body.append(initialSlide);
// }

// higherButton.addEventListener('click', () => {
// 	const container = document.querySelector('.higher-lower');
// 	container.remove();
// 	rightSidePoints.classList.add('show');

// 	const id = setInterval(() => {
// 		let number =
// 			Number(rightSidePoints.textContent.replace(/\D/g, '')) + 1000;
// 		if (number >= 56000) {
// 			clearInterval(id);
// 			const leftSlideNumber = Number(
// 				document
// 					.querySelector('.points.left')
// 					.textContent.replace(/\D/g, '')
// 			);
// 			const timeoutId = setTimeout(() => {
// 				if (leftSlideNumber <= number) {
// 					score.textContent = +score.textContent + 1;

// 					if (shufflleSlides.length - 1 === temp.length - 1) {
// 						document.querySelector(
// 							'.modal-children .title'
// 						).textContent = "Good Job! You've won";
// 						document.querySelector(
// 							'.modal-children .retry'
// 						).textContent = 'Replay';
// 						document.querySelector('.modal').classList.add('show');
// 						return;
// 					}
// 					document.querySelector('.left-sl').remove();
// 					document.querySelector('.searches.right').textContent =
// 						'average monthly searches';

// 					clearTimeout(timeoutId);
// 					createSilde();
// 				} else {
// 					if (+score.textContent > +highscore.textContent) {
// 						highscore.textContent = score.textContent;
// 					}
// 					document.querySelector('.modal').classList.add('show');
// 				}
// 			}, 500);
// 		}
// 		rightSidePoints.textContent = number.toLocaleString();
// 	}, 5);
// });
// lowerButton.addEventListener('click', () => {
// 	const container = document.querySelector('.higher-lower');
// 	container.remove();
// 	rightSidePoints.classList.add('show');

// 	const id = setInterval(() => {
// 		let number =
// 			Number(rightSidePoints.textContent.replace(/\D/g, '')) + 1000;
// 		if (number >= 56000) {
// 			clearInterval(id);
// 			const leftSlideNumber = Number(
// 				document
// 					.querySelector('.points.left')
// 					.textContent.replace(/\D/g, '')
// 			);
// 			const timeoutId = setTimeout(() => {
// 				if (leftSlideNumber >= number) {
// 					score.textContent = +score.textContent + 1;

// 					if (shufflleSlides.length - 1 === temp.length - 1) {
// 						document.querySelector(
// 							'.modal-children .title'
// 						).textContent = "Good Job! You've won";
// 						document.querySelector(
// 							'.modal-children .retry'
// 						).textContent = 'Replay';
// 						document.querySelector('.modal').classList.add('show');
// 						return;
// 					}
// 					document.querySelector('.left-sl').remove();
// 					document.querySelector('.searches.right').textContent =
// 						'average monthly searches';
// 					clearTimeout(timeoutId);
// 					createSilde();
// 				} else {
// 					if (+score.textContent > +highscore.textContent) {
// 						highscore.textContent = score.textContent;
// 					}
// 					document.querySelector('.modal').classList.add('show');
// 				}
// 			}, 500);
// 		}
// 		rightSidePoints.textContent = number.toLocaleString();
// 	}, 5);
// });
