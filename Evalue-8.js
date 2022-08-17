function task() {
    console.log("Display message after 5 sec");
}

console.log('Start script...');

setTimeout(() => {
    task();
}, 5000);

console.log('Done!');