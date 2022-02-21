var env = process.env.NODE_ENV || "prod";

var config = {
    dev: {
        port: 8080,
        mobileUrl: "http://localhost:8082/"
    },
    prod: {
        port: 80,
        mobileUrl: "http://vh-1-2022020600093394.host1.4w3w.com/"
    }
};

var exports = module.exports = config[env];