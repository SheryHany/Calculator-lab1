module.exports = (firstNum, ...args) => {
        return args.reduce(((agg, val) =>
            {
                if (val !== 0) {
                    return agg /= val;  
                }else{
                    throw "cant divide by 0";
                }
            }), firstNum)
    };

