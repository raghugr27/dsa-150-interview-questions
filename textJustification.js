/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let i = 0;
    
    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;
        
        // Find how many words fit in the current line
        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
            lineLen += 1 + words[j].length;
            j++;
        }
        
        let line = "";
        let numWords = j - i;
        let totalSpaces = maxWidth - (lineLen - (numWords - 1));
        
        // Last line or single word: left-justified
        if (j === words.length || numWords === 1) {
            line = words.slice(i, j).join(" ");
            line += " ".repeat(maxWidth - line.length);
        } else {
            let spaces = Math.floor(totalSpaces / (numWords - 1));
            let extra = totalSpaces % (numWords - 1);
            
            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) {
                    line += " ".repeat(spaces + (extra > 0 ? 1 : 0));
                    if (extra > 0) extra--;
                }
            }
        }
        
        res.push(line);
        i = j;
    }
    
    return res;
};