module.exports = (api) => {
  const isTest = api.env("test");

  const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ];
  return {
    presets,
  };
};
