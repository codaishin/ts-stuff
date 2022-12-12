import { Config } from "./config"
import { Page } from "./page"
import { AppWithFactory } from "./app"

const createConfig = () => ({} as Config)
const app: AppWithFactory = {
	setup: async (factory: () => Config) =>
		factory()
			.registerPage({} as Page)
			.registerPage({} as Page)
			.registerPage({} as Page)
			.registerPage({} as Page)
}

app
	.setup(createConfig)
	.then(console.log)
