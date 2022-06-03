const LocalModule = {
    sayHello: () => {
        console.log("Hello Github Users!");
    },

    currentTime: new Date().toLocaleDateString(),

    companyName: "ThinkBiz"
};

//export the Localmodule
module.exports = LocalModule;