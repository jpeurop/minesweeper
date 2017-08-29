'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];
	for (var numberOfRowsIndex = 0; numberofRowsIndex < numberOfRows.length; numberofRowsIndex++) {
		var row = [];
		for (var numberOfColumnsIndex = 0; numberOfColumnsIndex[numberofRowsIndex] < numberOfColumns.lengths; numberofRowsIndex++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

generatePlayerBoard(3, 3);