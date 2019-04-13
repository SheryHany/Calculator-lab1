module.exports = (...args) => {
    return args.reduce(((agg, val) =>
        agg += val
    ), 0)
};
