let stocks = {
    fruits : ["strawberry", "grapes", "bannana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = false;

function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("Shop is closed"));
        };
    });
};

async function kitchen() {
    try{
        await time(2000);
        console.log(`You have chosen ${stocks.fruits[0]}`);
        await time(0000);
        console.log("Production has been initiated");
        await time(2000);
        console.log("The frut is being shopped");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);
        await time(1000);
        console.log("The machine has started");
        await time(2000);
        console.log(`Your ice cream has been placed on the ${stocks.holder[0]}`);
        await time(3000);
        console.log(`${stocks.toppings[0]} has been added to your ice cream`);
        await time(2000);
        console.log("Production is complete! Here is your ice cream!");
    }
    catch {
        console.log("Customer left");
    }
    finally{
        console.log("Thank you for visitig");
    }
};

kitchen();