(function displayNumbers() {
    const column = 3;
    for(let i = 0 ; i < column; i++) {
        let output = '';
        for(j = 0; j < 4; j++) {
            output+= (j * column + (i+1) )+ ' '
        }
        console.log(output + '\n');
    }
})();