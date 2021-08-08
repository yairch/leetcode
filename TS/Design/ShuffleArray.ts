class Solution {

    private _originial: number[];
    private _permutaion: number[];

    constructor(nums: number[]) {
        this._originial = nums;
        this._permutaion = [...this._originial];
    }

    reset(): number[] {
        this._permutaion = [...this._originial];
        return this._permutaion;
    }

    shuffle(): number[] {

        for(let i = 0; i < this._permutaion.length; i++) {

            let j: number = Math.floor(Math.random() * (this._permutaion.length - i)) + i;
            [this._permutaion[i], this._permutaion[j]] = [this._permutaion[j], this._permutaion[i]];
        }

        return this._permutaion;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */