import { Config } from "./config"
import { Page } from "./page"
import { AppWithClass } from "./app"

class MyConfig implements Config {
	registerPage() {
		return {} as Config
	}
}

class MyApp implements AppWithClass {
	async setup(cls: {new() : Config}) {
		return new cls()
			.registerPage({} as Page)
			.registerPage({} as Page)
			.registerPage({} as Page)
			.registerPage({} as Page)
	} 
}

new MyApp()
	.setup(MyConfig)
	.then(console.log)
