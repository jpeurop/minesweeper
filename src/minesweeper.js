class Game{

  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }//ends constructor

	playMove(rowIndex, columnIndex){
		this._board.flipTile(rowIndex, columnIndex);

		if (this._board.playerBoard[rowIndex][columnIndex] === 'B'){
			console.log('Game over');
			this._board.print();
		}
		else if (this._board.hasSafeTiles() === false){
			console.log('You won');
		}
		else{
			console.log('Current Board:');
			this._board.print();
		}
	}
}


class Board{
	constructor (numberOfRows, numberOfColumns, numberOfBombs){
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
	}

	get playerBoard(){
		return this._playerBoard;
	}

	flipTile (rowIndex, columnIndex){

		if (this._playerBoard[rowIndex][columnIndex] !== ' '){
			console.log('This tile has already been flipped!');
			return;
		}
		else if (this._bombBoard[rowIndex][columnIndex] === 'B'){
			this._playerBoard[rowIndex][columnIndex] = 'B';
		}
		else {
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
			//console.log('KK numberOfNEighborBombs:' + this.getNumberOfNeighborBombs(rowIndex, columnIndex));
		}
		this._numberOfTiles --;
	}

	getNumberOfNeighborBombs(rowIndex, columnIndex) {
		const neighborOffsets = [
			[-1,-1],
			[-1,0],
			[-1,1],
			[0,-1],
			[0,1],
			[1,-1],
			[1,0],
			[1,1]
		];

		const numberOfRows = this._bombBoard.length;
		const numberOfColumns = this._bombBoard[0].length;
		this._numberOfBombs = 0;

		neighborOffsets.forEach(offset => {
			const neighborRowIndex = rowIndex + offset[0];
			const neighborColumnIndex = columnIndex + offset[1];
			if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
				if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B')
				this._numberOfBombs ++;
			}
			
		});
		return this._numberOfBombs;
	}

	hasSafeTiles(){
		return this._numberOfTiles !== this._numberOfBombs;
	}

	print() {
  		console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
	}

	static generatePlayerBoard(numberOfRows, numberOfColumns) {
		this._board = [];
		for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
			let row = [];
			for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
				row.push(' ');
			}
			this._board.push(row);

		}
		return  this._board;
	}

	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
		this._board = [];
		for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
			let row = [];
			for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
				row.push(null);
			}
			this._board.push(row);

		}

		let numberOfBombsPlaced = 0;	
		while (numberOfBombsPlaced < numberOfBombs){
			let randomRowIndex = Math.floor(Math.random() * numberOfRows);
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
			if(this._board[randomRowIndex][randomColumnIndex] !== 'B'){
				this._board[randomRowIndex][randomColumnIndex] = 'B';
				numberOfBombsPlaced++;
			}

			// Control flow to not place any bombs where bombs already exist
		}
		return this._board;	
	}

}








/*const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);


flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);*/

const g = new Game(3,3,3);
g.playMove(0,0);
