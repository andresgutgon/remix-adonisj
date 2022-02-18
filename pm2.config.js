module.exports = {
  apps: [
    {
      name: "Express App",
      script: "server.js",
      watch: ["remix.config.js", "app"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "Remix",
      script: "remix watch",
      ignore_watch: ["."],
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
