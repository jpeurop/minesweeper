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

console.log(generatePlayerBoard(10,3));