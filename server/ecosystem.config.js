module.exports = {
  apps: [
    {
      name: "vk-parser",
      script: "npm run start",
      automation: false,
      args: "run shivkumarscript",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
