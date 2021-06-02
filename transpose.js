const transpose = function(matrix) {
  let result = [];
  const rowLength = matrix[0].length;
  for (let y = 0; y < rowLength; y++) {
    let temp = [];
    for (let x = 0; x < matrix.length; x++) {
      temp.push(matrix[x][y]);
    }
    result.push(temp);
  }
  return result;
};

module.exports = transpose;