export const logger = {
  log: (message: string) =>
    console.log(`${new Date().toISOString()} | ${message}`),
};
