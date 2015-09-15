let args = process.argv;
let target = 'World';
if (args.length > 2) {
  target = args[2];
}
let myString = `Hello ${target}\n`;
process.stdout.write(myString);
