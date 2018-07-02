function Matrix(rows, columns) {
    var matrix = [[]]
    this.rows = rows;
    this.column = columns;
    this.getRows = function() {return this.rows;}
    this.getColumn = function() {return this.column;}
    this.getMatrix = function() {return matrix;}

    this.setItem = function(row, column, item) {matrix[row][column] = item;}
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
    this.setItems = function(...args) {
        let arr = new Array();
        if (args.length < rows) {throw new Error("matrix rows small it's should be: " + rows);}
        if (args.length > rows) {throw new Error("matrix rows big it's should be: " + rows);}

        for (let i in args) {
            if (args[i].length < columns) {throw new Error("matrix column: " + i + " small it's should be: " + columns);}
            if (args[i].length > columns) {throw new Error("matrix column: " + i + " big it's should be: " + columns);}
            arr[i] = args[i]
        }
        matrix = arr;
    }
}
var a = new Matrix(2, 2);
a.setMatrix(1)
console.log(a.getMatrix());
