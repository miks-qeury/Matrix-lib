function Matrix(rows, columns) {
    var matrix = [
        []
    ]
    this.getRows = function() {
        return rows;
    }
    this.getColumn = function() {
        return columns;
    }
    this.getMatrix = function() {
        return matrix;
    }
    this.getItem = function(row, column) {
        return matrix[row][column]
    }

    this.setItem = function(row, column, item) {
        matrix[row][column] = item;
    }
    this.setMatrix = function(args) {
        let arr = new Array();
        for (let i = 0; i < rows; i++) {
            arr[i] = new Array();
            for (let j = 0; j < columns; j++) {
                arr[i][j] = args;
            }
        }
        matrix = arr;
    }
    this.setItems = function(args) {
        let arr = new Array();
        if (args.length < rows) {
            throw new Error("matrix rows small it's should be: " + rows);
        }
        if (args.length > rows) {
            throw new Error("matrix rows big it's should be: " + rows);
        }

        for (let i in args) {
            if (args[i].length < columns) {
                throw new Error("matrix column: " + i + " small it's should be: " + columns);
            }
            if (args[i].length > columns) {
                throw new Error("matrix column: " + i + " big it's should be: " + columns);
            }
            arr[i] = args[i]
        }
        matrix = arr;
    }
    this.eqMatrix = function(matrix) {
        if (this.getRows() == matrix.getRows() && this.getColumn() == matrix.getColumn()) {
            return true;
        }
        return false;
    }
    this.sum = function(matrix) {
        let newMatrix = new Array();
        for (let i = 0; i < this.getRows(); i++) {
            newMatrix[i] = new Array();
            for (let j = 0; j < this.getColumn(); j++) {
                newMatrix[i][j] = this.getMatrix()[i][j] + matrix.getMatrix()[i][j];
            }
        }
        return newMatrix;
    }

    this.multiA = function(index) {
        let newMatrix = new Array();
        for (let i = 0; i < this.getRows(); i++) {
            newMatrix[i] = new Array();
            for (let j = 0; j < this.getColumn(); j++) {
                newMatrix[i][j] = this.getMatrix()[i][j] * index
            }
        }
        return newMatrix;
    }
    this.multyMatrix = function(matrix) {
        var rowsA = this.getRows(),
            colsA = this.getColumn(),
            rowsB = matrix.getRows(),
            colsB = matrix.getColumn()
            C = [];
        if (colsA != rowsB) return false;
        for (var i = 0; i < rowsA; i++) C[i] = [];
        for (var k = 0; k < colsB; k++) {
            for (var i = 0; i < rowsA; i++) {
                var t = 0;
                for (var j = 0; j < rowsB; j++) t += this.getMatrix()[i][j] * matrix.getMatrix()[j][k];
                C[i][k] = t;
            }
        }
        return C;
    }
}

function MatrixError(message) {
    Error.call(this, message);
    this.name = "MatrixError";
    this.message = message;

}
var a = new Matrix(4, 4);
var b = new Matrix(4, 4);
a.setMatrix(4)
b.setMatrix(2)
console.log(a.getMatrix());
console.log(b.getMatrix());
console.log(a.sum(b));
console.log(a.multiA(4));
console.log(a.multyMatrix(b));
