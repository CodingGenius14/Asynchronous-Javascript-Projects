let stocks = {
    fruits : ["strawberry", "grapes", "bannana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else {
            reject(console.log("Our shop is closed"));
        }
    });
};

order(2000, () => console.log(`You have chosen ${stocks.fruits[0]}`))

    .then(() => {
        return order(0000, () => console.log("Production has started"));
    })
    .then(() => {
        return order(2000, () => console.log("The frut is being shopped"));
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`));
    })
    .then(() => {
        return order(1000, () => console.log("The machine has started"));
    })
    .then(() => {
        return order(2000, () => console.log(`Your ice cream has been placed on the ${stocks.holder[0]}`));
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} has been added to your ice cream`));
    })
    .then(() => {
        return order(2000, () => console.log("Production is complete! Here is your ice cream!"));
    })
    .catch(() => {
        console.log("Customer left");
    })
    .finally(() => {
        console.log("Thank you for visiting!")
    });
    