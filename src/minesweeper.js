const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
		let row = [];
		for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(' ');
		}
		board.push(row);

	}
	return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
		let row = [];
		for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(null);
		}
		board.push(row);

	}

	let numberOfBombsPlaced = 0;	
	while (numberOfBombsPlaced < numberOfBombs){
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
		// Control flow to not place any bombs where bombs already exist
	}
	return board;	
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);