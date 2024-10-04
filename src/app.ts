import { Server } from "./presentation/server";
import { config } from "./config";
import { AppRoutes } from "./presentation/server.routes";

async function main() {
  new Server({ port: config.PORT, router: AppRoutes.routes }).start();
}

main();
