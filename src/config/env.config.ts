interface Config {
  PORT: number;
}

export const config: Config = {
  PORT: process.env.PORT as unknown as number,
};
