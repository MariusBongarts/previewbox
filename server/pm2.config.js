module.exports = {
    apps: [
      {
        name: 'previewbox-server',
        script: 'npm',
        args: 'run start:prod',
        node_args: '-r dotenv/config',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  