"use strict"

function showTypeOf(value) {
	console.log(value, typeof value)
}

function newGame(n) {
	let words = ['Привет, я загадал число от 1 до 100, Угадайте если сможете!\n У Вас 10 попыток!',
		'Я вновь загадал число от 1 до 100, В этот раз постарайтесь угадать!\n У Вас снова 10 попыток!',
		'Ну что ж, продолжим, число загадано, количество попыток 10'
	]
	let random = Math.ceil(Math.random() * 100)
	let counter = 10
	let value = prompt(words[n], random);

	showTypeOf(value)

	function currentGame(random, counter, value) {
		let digit;

		let specCounter = function (counter) {
			if (counter < 2) {
				return '\n ПОСЛЕДНЯЯ ПОПЫТКА!!!';
			} else if (counter < 4) {
				return '\n осталось всего ' + counter + ' попытки';
			} else if (counter < 5) {
				return '\n осталось ' + counter + ' попытки';
			} else {
				return '\n осталось ' + counter + ' попыток';
			}
		}




		function gameLogic(counter, value) {
			let gameOver
			if (counter === 0) {
				gameOver = confirm('ПОТРАЧЕНО!!!\nВсе попытки израсходованы. Еще каточку?');
				if (gameOver === true) {
					return newGame(1)
				} else {
					return alert('Эх такой экшон упустили, досвидания.')
				}
			} else if (value === null) {
				gameOver = confirm('НЕЕЕЕЕТ!!!' + '\nВы хотите выйти из нашей мега игры "ААА" класса ?' + '\nМожет продолжим катку?')
				if (gameOver === true) {
					value = prompt('Прдолжаем игру, ЦИФРА!!!\n' + specCounter(++counter));
					currentGame(random, counter, value);
				} else {
					return alert('Эх такой экшон упустили, досвидания.');
				}
			}
		}

		function toDigit(value) {
			let trimer = value.trim()
			return Number(trimer)
		}





		function digitLogic(random, counter, digit) {

			function isNumber(value) {
				return !isNaN(parseFloat(value)) && isFinite(value) && value !== 0
			}

			showTypeOf(digit)
			if (isNumber(digit)) {
				if (digit === random) {
					let win = confirm('Ура!!! Число угадано. Еще каточку?');
					if (win = true) {
						newGame(3)
					}
					if (win = false) {
						alert('Goodbye')
					}
				}
				if (digit > random) {
					value = prompt('Загаданное число меньше, попробуйте еще раз.' + specCounter(counter));
					currentGame(random, counter, value);
				}
				if (digit < random) {
					value = prompt('Загаданное число больше, попробуйте еще раз.' + specCounter(counter));
					currentGame(random, counter, value);
				}
			} else {
				value = prompt('Это не число, попробуйте еще раз.' + specCounter(counter));
				currentGame(random, counter, value);
			}
		}





		counter--
		gameLogic(counter, value)
		digit = toDigit(value)
		digitLogic(random, counter, digit)









	}

	currentGame(random, counter, value)

}
newGame(0);