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


// let showTypeOf = (value) => {

// 	console.log(value, typeof value)
// }



// function newGame() {
// 	let random = Math.ceil(Math.random() * 100)
// 	let counter = 10
// 	let digit = +prompt('Привет, я загадал число от 1 до 100, Угадайте если сможете! У Вас 10 попыток!', random);



// 	function isNumber(value) {
// 		return !isNaN(parseFloat(value)) && isFinite(value)
// 	}

// 	function currentGame(random, counter, value) {
// 		let currentCounter = ' попыток осталось: ' + `${counter}`
// 		let lastCounter = ' попыток израсходовано: ' + `${10-counter}`






// 		function gameLogic(random, counter, value) {



// 			if (value === null) {

// 				let exit = confirm('Вы больше не хотите с нами играть?')
// 				switch (exit) {
// 					case true:
// 						alert('Досвидания!!!');
// 						break

// 					case false:
// 						value = prompt('Продолжим игру, введите число ' + currentCounter, random), currentGame(random, counter, value);
// 						break

// 				}

// 			} else {


// 				if (isNumber(value)) {

// 					if (value === random) {
// 						confirm('Отлично сыграно, может еще каточку?' + `${lastCounter}`);

// 					} else if (value > random) {
// 						value = prompt('Загаданное число меньше' + currentCounter, random);
// 						currentGame(value, random, counter);
// 					} else if (value < random) {
// 						value = prompt('Загаданное число больше' + currentCounter, random);
// 						currentGame(value, random, counter)
// 					}

// 				} else {
// 					value = prompt('Это не число, введите число' + currentCounter, random)
// 					currentGame(random, counter, value)
// 				}
// 			}

// 			counter--








// 		}

// 		gameLogic(random, counter, value)

// 	}


// 	currentGame(random, counter, digit)
// 	console.log('newgame', random, counter, value)
// }

// newGame()








// "Загадывание случайного числа от 1 до 100"

// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// — если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!".

// Программа должна быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число должно храниться «в замыкании»