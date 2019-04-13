module.exports = (firstNum, ...args) => {
        return args.reduce(((agg, val) =>
            agg -= val
        ), firstNum)
    };