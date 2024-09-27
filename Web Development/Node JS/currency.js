// const canadianDollar = 0.74;
const britishmoney =.55;

// converts currency to double digits

function roundTwo(amount) {
return Math.round(amount * 100) / 100;
}
//takes in the value and does the math 
// exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
// exports.USToCanadian = us => roundTwo(us / canadianDollar);

exports.canadianToUK = cad => roundTwo(cad * britishmoney);
exports.UKToCanadian = uk => roundTwo(uk / britishmoney);

