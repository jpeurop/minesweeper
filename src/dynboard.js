// My own dynamically generated board

const generateBoard = (rows, columns) => {
	let board = [];
	for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++){
		let row = [];
		for (let columnsIndex = 0; columnsIndex < columns; columnsIndex++){
			row.push(' ');
		}
		board.push(row);
	}
	console.log(board.map(row => row.join('|')).join('\n'));
}

generateBoard(5,3);

