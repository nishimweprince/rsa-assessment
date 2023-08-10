const climbStairs = (n) => {
    if (n <= 2) {
        return n;
    }

    const distinctWays = new Array(n + 1).fill(0);
    distinctWays[1] = 1;
    distinctWays[2] = 2;

    for (let i = 3; i <= n; i++) {
        distinctWays[i] = distinctWays[i-1] + distinctWays[i -2];
    }

    return distinctWays[n];
}

console.log(climbStairs(10))