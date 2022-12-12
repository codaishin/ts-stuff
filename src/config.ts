import { Page } from "./page"


export interface Config {
	registerPage: (page: Page) => Config
}
