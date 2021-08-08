function longestCommonPrefix(strs: string[]): string {

    let prefix: string = '';

    if (!strs.length) return prefix;

    const pivot: string = strs[0];
    let char: string;
    let i: number = 0;
    while (i < pivot.length) {
        
        char = pivot.charAt(i);
        for (let str of strs) {
            if (str.charAt(i) !== char) return prefix;

        }
        
        prefix += char;
        i++;
    }

    return prefix;
};