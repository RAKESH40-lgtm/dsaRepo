let n = 3
for (let i = 0; i < n; i++) {
    // This is the inner loop which loops for the columns
    // no. of columns = row number for each line here.
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }
    // As soon as stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
}
