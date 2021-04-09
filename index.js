const rightSidePoints = document.querySelector('.points.right');
const higherButton = document.querySelector('.higher');
const lowerButton = document.querySelector('.lower');
const score = document.querySelector('.score-points');
const retryBtn = document.querySelector('.retry');
const modal = document.querySelector('.modal');

const leftSlide = document.querySelector('.left-sl');

const rightSlide = document.querySelector('.right-sl');

const buttonContainer = document.querySelector('.higher-lower');

retryBtn.addEventListener('click', () => {
	modal.classList.remove('show');
	const bodyWrapper = document.querySelector('.body-wrapper');
	// document.body.lastElementChild.remove();
	// document.body.lastElementChild.remove();
	// document.body.append(leftSlide);
	// document.body.append(rightSlide);
	bodyWrapper.lastElementChild.remove();
	bodyWrapper.lastElementChild.remove();
	bodyWrapper.append(leftSlide);
	bodyWrapper.append(rightSlide);
	const slideTitle = document.querySelector('.points.right');
	slideTitle.textContent = '0';
	slideTitle.classList.remove('show');
	document
		.querySelectorAll('.has')[1]
		.insertAdjacentElement('afterend', buttonContainer);
});
let temp = [];
const shuffleSlides = [
	{
		title: 'Adele',
		image:
			"url('http://api.higherlowergame.com/_client/images/general/adele.jpg')",
		searches: 2240000,
	},
	{
		title: 'Monaco Grand Prix',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/monaco-grand-prix.jpg")',
		searches: 49500,
	},
	{
		title: 'David',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/david-cameron.jpg")',
		searches: 135000,
	},
	{
		title: 'The Pill',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/the-pill.jpg")',
		searches: 33100,
	},
	{
		title: 'Barry Manilow',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/barry-manilow.jpg")',
		searches: 301000,
	},
	{
		title: 'Wii Sports',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/wii-sports.jpg")',
		searches: 49500,
	},
	{
		title: 'Burger King',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/burger-king.jpg")',
		searches: 6120000,
	},
	{
		title: 'Canoeing',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/canoeing.jpg")',
		searches: 90500,
	},
	{
		title: 'Paul Mccartney',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/paul-mccartney.jpg")',
		searches: 823000,
	},
	{
		title: 'Air Hockey',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/air-hockey.jpg")',
		searches: 110000,
	},
	{
		title: 'Eden Hazard',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/eden-hazard.jpg")',
		searches: 550000,
	},
	{
		title: 'IKEA',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/ikea.jpg")',
		searches: 37200000,
	},
	{
		title: 'Homelessness',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/homelessness.jpg")',
		searches: 165000,
	},
	{
		title: 'Scarlett Johansson',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/scarlett-johansson.jpg")',
		searches: 3350000,
	},
	{
		title: 'HIV',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/hiv.jpg")',
		searches: 823000,
	},
	{
		title: 'Earth',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/earth.jpg")',
		searches: 1830000,
	},
	{
		title: 'Halloween',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/halloween.jpg")',
		searches: 4090000,
	},
	{
		title: 'Orange',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/orange.jpg")',
		searches: 16600000,
	},
	{
		title: '9 11',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/9-11.jpg")',
		searches: 1000000,
	},
	{
		title: 'Hip Hop',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/hip-hop.jpg")',
		searches: 823000,
	},
	{
		title: 'John Lewis',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/john-lewis.jpg")',
		searches: 6120000,
	},
	{
		title: 'Broadchurch',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/broadchurch.jpg")',
		searches: 550000,
	},
	{
		title: 'Victoria Secret',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/victorias-secret.jpg")',
		searches: 7480000,
	},
	{
		title: 'ESPN',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/espn.jpg")',
		searches: 24900000,
	},
	{
		title: 'Brian Clough',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/brian-clough.jpg")',
		searches: 33100,
	},
	{
		title: 'Candy Crush Saga',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/candy-crush-saga.jpg")',
		searches: 7480000,
	},
	{
		title: 'Spain',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/spain.jpg")',
		searches: 823000,
	},
	{
		title: 'Mcdonalds',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/mcdonalds.jpg")',
		searches: 13600000,
	},
	{
		title: 'Exchange Rate',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/exchange-rate.jpg")',
		searches: 2740000,
	},
	{
		title: 'Chapecoense',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/chapecoense.jpg")',
		searches: 673000,
	},
	{
		title: 'Scented Candles',
		image:
			'url("http://api.higherlowergame.com/_client/images/general/scented-candles.jpg")',
		searches: 40500,
	},
];
function getSlideData() {
	if (shuffleSlides.length === temp.length) {
		return;
	}

	const data =
		shuffleSlides[Math.floor(Math.random() * shuffleSlides.length)];
	if (temp.includes(data)) {
		return getSlideData();
	} else {
		temp.push(data);
		return data;
	}
}
function createSilde() {
	const initialSlide = document.createElement('div');
	const slideData = getSlideData();

	if (!slideData) {
		return;
	}
	initialSlide.id = 'initial-slide';
	initialSlide.classList.add('right-sl');
	const slideOverlay = document.createElement('div');
	slideOverlay.classList.add('slide-overlay');
	initialSlide.append(slideOverlay);
	initialSlide.style.backgroundImage = slideData.image;

	const gameController = document.createElement('div');
	gameController.classList.add('game-controller');

	const mostSearchedTitle = document.createElement('h1');
	mostSearchedTitle.classList.add('title');
	mostSearchedTitle.classList.add('right');
	mostSearchedTitle.innerHTML = `<span class="quote start">“</span>${slideData.title}<span
            class="quote end"
            >”</span
        >`;
	gameController.append(mostSearchedTitle);

	const has = document.createElement('p');
	has.classList.add('has');
	has.textContent = 'has';

	gameController.append(has);

	const higherLower = document.createElement('div');
	higherLower.classList.add('higher-lower');

	const addToNumber = slideData.searches / 100;

	const higher = document.createElement('button');
	higher.innerHTML = 'Higher <i class="fas fa-caret-up up"></i>';
	higher.classList.add('btn');
	higher.classList.add('higher');

	const getHigherLowerCurrent = isHigher => {
		const container = document.querySelector('.higher-lower');
		container.remove();
		const rightSidePoints = document.querySelectorAll('.points.right')[1];
		rightSidePoints.classList.add('show');

		const id = setInterval(() => {
			let number =
				Number(rightSidePoints.textContent.replace(/\D/g, '')) +
				addToNumber;

			if (number >= slideData.searches) {
				clearInterval(id);
				const leftSlideNumber = Number(
					document
						.querySelectorAll('.points.right')[0]
						.textContent.replace(/\D/g, '')
				);

				const timeoutId = setTimeout(() => {
					if (
						(leftSlideNumber <= number && isHigher) ||
						(leftSlideNumber >= number && !isHigher)
					) {
						score.textContent = +score.textContent + 1;
						if (shuffleSlides.length === temp.length) {
							const highscore = document.querySelector(
								'.high-score-points'
							);
							if (+score.textContent > +highscore.textContent) {
								highscore.textContent = score.textContent;
							}
							document.querySelector(
								'.modal-children .title'
							).textContent = "Good Job! You've won";
							document.querySelector(
								'.modal-children .retry'
							).innerHTML = `Replay <i class="fas fa-arrow-circle-down"</i>`;
							document
								.querySelector('.modal')
								.classList.add('show');
							temp = [];
							score.textContent = '0';
							return;
						}

						document.querySelectorAll('.right-sl')[0].remove();
						document.querySelector('.searches').textContent =
							'average monthly searches';
						clearTimeout(timeoutId);
						createSilde();
					} else {
						const highscore = document.querySelector(
							'.high-score-points'
						);

						if (+score.textContent > +highscore.textContent) {
							highscore.textContent = score.textContent;
						}
						document.querySelector(
							'.modal-children .title'
						).textContent = "Ooops! Looks like you've lost";
						document.querySelector(
							'.modal-children .retry'
						).innerHTML = `Retry <i class="fas fa-arrow-circle-down"></i>`;

						document.querySelector('.modal').classList.add('show');
						temp = [];
						score.textContent = '0';
					}
				}, 500);
			}
			rightSidePoints.textContent = number.toLocaleString();
		}, 5);
	};

	higher.addEventListener('click', () => getHigherLowerCurrent(true));

	const lower = document.createElement('button');
	lower.innerHTML = 'Lower <i class="fas fa-caret-down down"></i>';
	lower.classList.add('btn');
	lower.classList.add('lower');

	lower.addEventListener('click', () => getHigherLowerCurrent(false));

	higherLower.append(higher);
	higherLower.append(lower);

	gameController.append(higherLower);

	const points = document.createElement('h1');
	points.classList.add('points');
	points.classList.add('right');
	points.textContent = '0';

	gameController.append(points);

	const searches = document.createElement('p');
	searches.classList.add('searches');
	searches.classList.add('right');
	searches.textContent = `searches than ${document
		.querySelector('.game-controller .title')
		.textContent.replace(/[“”]+/g, '')}`;
	gameController.append(searches);
	initialSlide.append(gameController);
	// document.body.append(initialSlide);
	document.querySelector('.body-wrapper').append(initialSlide);
}

const setHigherOrLower = isHigher => {
	const container = document.querySelector('.higher-lower');
	container.remove();
	rightSidePoints.classList.add('show');
	const toAdd = 560;
	const SEARCHES = 56000;
	const id = setInterval(() => {
		let number =
			Number(rightSidePoints.textContent.replace(/\D/g, '')) + toAdd;
		if (number >= SEARCHES) {
			clearInterval(id);
			const leftSlideNumber = Number(
				document
					.querySelector('.points.left')
					.textContent.replace(/\D/g, '')
			);
			const timeoutId = setTimeout(() => {
				if (
					(leftSlideNumber <= number && isHigher) ||
					(leftSlideNumber >= number && !isHigher)
				) {
					score.textContent = +score.textContent + 1;
					document.querySelector('.left-sl').remove();
					document.querySelector('.searches.right').textContent =
						'average monthly searches';
					clearTimeout(timeoutId);
					createSilde();
				} else {
					const highscore = document.querySelector(
						'.high-score-points'
					);

					if (+score.textContent > +highscore.textContent) {
						highscore.textContent = score.textContent;
					}
					document.querySelector(
						'.modal-children .title'
					).textContent = "Ooops! Looks like you've lost";
					document.querySelector(
						'.modal-children .retry'
					).innerHTML = `Retry <i class="fas fa-arrow-circle-down"></i>`;

					document.querySelector('.modal').classList.add('show');

					temp = [];
					score.textContent = '0';
				}
			}, 500);
		}
		rightSidePoints.textContent = number.toLocaleString();
	}, 5);
};

higherButton.addEventListener('click', () => setHigherOrLower(true));
lowerButton.addEventListener('click', () => setHigherOrLower(false));
