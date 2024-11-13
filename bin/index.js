import figlet from "figlet";
import chalk from "chalk";

figlet.text('KXREADER', {
    font: 'Standard',
}, (err, data) => {
    if (err) {
        console.error("Ouchhh can't greet you something went wrong...", err);
        return;
    }
    console.log(chalk.black(data));
});

