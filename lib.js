function Matrix(rows, columns) {
    var matrix = [[]]
    this.getRows = function() {return rows;}
    this.getColumn = function() {return columns;}
    this.getMatrix = function() {return matrix;}
    this.getItem = function(row, column){return matrix[row][column]}

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
    this.setItems = function(args) {
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
    this.eqMatrix = function(matrix){
        if(this.getRows() == matrix.getRows() && this.getColumn() == matrix.getColumn()){return true;}
        return false;
    }
}

function MatrixError(message){
    Error.call(this, message);
    this.name = "MatrixError";
    this.message = message;

}
var a = new Matrix(4, 4);
var b = new Matrix(3, 4);
a.setMatrix(1)
console.log(a.eqMatrix(b));
throw new MatrixError("message");
