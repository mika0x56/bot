module.exports = {
    port: process.env.port || process.env.PORT || 3978,
    microsoft: {
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }
};
