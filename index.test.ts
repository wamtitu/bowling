import { totalScore } from ".";

describe("calculating scores i bowling", ()=>{
    it("if all throws are 0", ()=>{
        const rolls = Array(20).fill(0);
        const result = totalScore(rolls);
        const expected = 0;

        expect(result).toEqual(expected);
    });
    it("if all throws are 1", ()=>{
        const rolls = Array(20).fill(1);
        const result = totalScore(rolls);
        const expected = 20;

        expect(result).toEqual(expected);
    });
    it("if player throws a spare", ()=>{
        const rolls = [
            5,0,
            6,3,
            0,0,
            0,0,
            0,0,
            5,5,
            5,0,
            0,0,
            0,0,
            0,0
        ];
        const result = totalScore(rolls);
        const expected = 34;

        expect(result).toEqual(expected);
    });
    it("if player throws a spare in final frame", ()=>{
        const rolls = [
            5,0,
            6,3,
            0,0,
            0,0,
            0,0,
            5,5,
            5,0,
            0,0,
            0,0,
            6,4,8
        ];
        const result = totalScore(rolls);
        const expected = 52;

        expect(result).toEqual(expected);
    });
    it("if player throws a strike", ()=>{
        const rolls = [
            10,
            6,3,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0
        ];
        const result = totalScore(rolls);
        const expected = 28;

        expect(result).toEqual(expected);
    })

})