/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 export var solution = function(isBadVersion: any) {

    function binSearch(low: number, high: number): number {
        
        const mid: number = Math.floor((low + high) / 2);

        if (isBadVersion(mid)) {
            if(mid === 1 || !isBadVersion(mid-1)) return mid;

            return binSearch(low, mid);
        }
        else {
            return binSearch(mid + 1, high);
        }
    }
    return function(n: number): number {
        
        // perform binary search
        // search left if version is bad and right if version is good
        // first bad version is a bad version whose previous version (left) is good

        return binSearch(1, n)
    };
};