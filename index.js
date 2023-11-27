"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalScore = void 0;
function totalScore(rolls) {
    var score = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        var firstThrow = rolls[frameIndex];
        if (firstThrow === 10) {
            //it is strike
            score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
            frameIndex++;
        }
        else {
            var secondThrow = rolls[frameIndex + 1];
            score += secondThrow + firstThrow;
            if (firstThrow + secondThrow === 10) {
                score += rolls[frameIndex + 2];
            }
        }
        frameIndex = frameIndex + 2;
    }
    return score;
}
exports.totalScore = totalScore;
