const states = new Map();
const selectPattern = /^select \d+$/;
states.set("search", userInput => {
    if(selectPattern.test(userInput.trim())) {
        return "inputEmail"
    }
//findProducts

});

states.set("search", (userInput) => {
    //findProducts
});