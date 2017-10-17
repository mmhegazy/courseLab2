"use strict";
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 0] = "New";
    Condition[Condition["Used"] = 1] = "Used";
    Condition[Condition["Discontinued"] = 2] = "Discontinued";
})(Condition = exports.Condition || (exports.Condition = {}));
;
exports.PRODUCTS = [
    { id: 11, name: 'Apple iphone 4', description: 'Iphone 4 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 12, name: 'Apple  iphone 4 +', description: 'Iphone4+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 13, name: 'Apple  iphone 5', description: 'Iphone5 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 14, name: 'Apple  iphone 5c', description: 'Iphone5c from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 15, name: 'Apple  iphone 5s', description: 'Iphone5s from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 16, name: 'Apple  iphone 6', description: 'Iphone6 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 17, name: 'Apple  iphone 6S', description: 'Iphone6S from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 18, name: 'Apple  iphone 6s+', description: 'Iphone6S+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 19, name: 'Apple  iphone 7', description: 'Iphone7 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 20, name: 'Apple  iphone 7 +', description: 'Iphone7+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' }
];
//# sourceMappingURL=MockProduct.js.map