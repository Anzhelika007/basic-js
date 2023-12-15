const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let answer = [names[0]];

    names.map(x => {
        //console.log(answer)
        if(answer.includes(x)){
            let count = 1;
            while (answer.includes(`${x}(${count})`)) {
                count++;
            }
            answer.push(`${x}(${count})`);
        } else {
            answer.push(x);
        }
    })

    return answer;
}

module.exports = {
  renameFiles
};
