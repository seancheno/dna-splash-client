import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Page from "./components/Layout/Page/Page";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faStroopwafel,
	faCheck,
	faUndoAlt,
	faDna,
	faLongArrowAltDown,
	faEnvelope,
	faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faStroopwafel,
	faCheck,
	faUndoAlt,
	faDna,
	faLongArrowAltDown,
	faEnvelope,
	faArrowAltCircleLeft
);

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Layout>
						<Page />
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
