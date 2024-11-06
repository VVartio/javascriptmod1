function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    const rolls = [];
    let roll = 0;

    while (roll !== 6) {
        roll = rollDice();
        rolls.push(roll);
    }

    const ul = document.createElement("ul");
    rolls.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

main();