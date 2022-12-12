import { Config } from "./config"


export interface AppWithClass {
	setup: (cls: {new() : Config}) => Promise<Config>,
}

export interface AppWithFactory {
	setup: (factory: () => Config) => Promise<Config>,
}
