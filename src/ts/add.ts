function main(): void {
    const player: string = "hoi";
    playerOne(player);
}

function playerOne(player_one: string): string {
    return player_one.length >= 3 || player_one.length <= 12 ? "Good" : "Bad";
}

//main();