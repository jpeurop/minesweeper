'use strict';

// My own dynamically generated board

var generateBoard = function generateBoard(rows, columns) {
	var board = [];
	for (var rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
		var row = [];
		for (var columnsIndex = 0; columnsIndex < columns; columnsIndex++) {
			row.push(' ');
		}
		board.push(row);
	}
	console.log(board.map(function (row) {
		return row.join('|');
	}).join('\n'));
};

generateBoard(5, 3);