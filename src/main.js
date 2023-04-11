import * as riot from "riot";
import App from "./App.riot";

const mountApp = riot.component(App);
const app = mountApp(document.getElementById("App"));
