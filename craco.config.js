const port = process.env.port || process.env.npm_config_port || 1192; // dev port

module.exports = {
  webpack: {},
  devServer: {
    host: "localhost",
    port: port,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: require("./mock/app.js"),
  },
};
