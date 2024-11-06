function votingProgram() {
    const numCandidates = parseInt(prompt("Enter the number of candidates: "));

    const candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({
            name: name,
            votes: 0
        });
    }

    const numVoters = parseInt(prompt("Enter the number of voters: "));

    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(`Voter ${i + 1}, enter the name of your chosen candidate:`);

        if (vote === "") {
            console.log(`Voter ${i + 1} chose to cast an empty vote.`);
            continue;
        }

        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes += 1;
        } else {
            console.log(`Voter ${i + 1} entered an invalid candidate name.`);
        }
    }

    candidates.sort((a, b) => {
        console.log(a, b);
        return b.votes - a.votes;
    });

    const winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

votingProgram();
