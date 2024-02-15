var Total;
(function (Total) {
    Total[Total["qty"] = 2] = "qty";
    Total[Total["price"] = 4500] = "price";
    Total[Total["result"] = 9000] = "result";
})(Total || (Total = {}));
console.log("Total = ".concat(Total.result));
