module.exports = (...args) => {
    return args.map(e => {
        // +e? e : throw "Parameter is not a number!";
        console.log(+e);
        if (Number.isNaN(+e)) {
            throw "Parameter is not a number!";
        }
        return e;
    })
};