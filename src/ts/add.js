function main() {
    var player = "hoi";
    playerOne(player);
}
function playerOne(player_one) {
    return player_one.length >= 3 || player_one.length <= 12 ? "Good" : "Bad";
}
//main();
