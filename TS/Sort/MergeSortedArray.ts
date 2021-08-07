/**
 Do not return anything, modify nums1 in-place instead.
 */
 export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    // loop through both arrays
    let i: number = 0, k: number = 0, j: number = 0;
    while (i < m && j < n) {

        // move to nums1 the min item
        if (nums1[k] <= nums2[j]) {
            i++;
            k++;
        }
        else {
            // nums1.splice(++i, 0, nums2[j++]);
            // i++;

            for (let t = n + m - 2; t >= k; t--) {
                nums1[t + 1] = nums1[t];
            }

            nums1[k] = nums2[j];
            j++;
            k ++;
        }
    }

    // more items in nums2
    if (j < n) {
        while(j < n) {
            nums1[k] = nums2[j];
            j++;
            k ++;
        }
    }

    // more items in nums1 - keep in place, nothing to change

};