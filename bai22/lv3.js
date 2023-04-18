function longestCommonSubstring(str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
        return "";
    } else if (str1[str1.length - 1] === str2[str2.length - 1]) {
        return (
            longestCommonSubstring(str1.slice(0, -1), str2.slice(0, -1)) +
            str1[str1.length - 1]
        );
    } else {
        let lcs1 = longestCommonSubstring(str1.slice(0, -1), str2);
        let lcs2 = longestCommonSubstring(str1, str2.slice(0, -1));
        return lcs1.length > lcs2.length ? lcs1 : lcs2;
    }
}


console.log(longestCommonSubstring('abcdsjalkas','abcdejlws'))