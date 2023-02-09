let stocks = {
    fruits : ["strawberry", "grapes", "bannana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};


let order = (fruit_index, call_production) => {

    setTimeout(() => {
        console.log(`You have chosen ${stocks.fruits[fruit_index]}`);
        call_production();
    }, 2000);
};


let production = () => {
    
    setTimeout(() => {
        console.log("Production phase initiated!");

        setTimeout(() => {
            console.log("The food has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);

                setTimeout(() => {
                    console.log("The machine has started");

                    setTimeout(() => {
                        console.log(`The ice cream has been placed in the ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} has been added to your ice cream`);

                            setTimeout(() => {
                                console.log("Production phase is completed, here is your ice cream");

                            }, 2000)
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);    
        }, 2000);
    }, 0000);
};

order(1, production);