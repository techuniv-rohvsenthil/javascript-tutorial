var input = process.argv.slice(2);
var output = input.map( x => x[0] )
                    .reduce( (str, x) => str + x, '' );
console.log(`[${input}] becomes "${output}"`);
