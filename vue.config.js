const path = require("path");

module.exports = {//this exports an object with different configurations
    //for our vue app
    //Setting the output directory of our build
    outputDir: path.resolve(__dirname, "../server/public"),
    devServer: {
        proxy: {
            "/api": { //adds a proxy for anything that is "/api"
                target: "http://localhost:5000"
            }
        }
    }
}