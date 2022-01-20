import React from "react";
import { Navigation } from "./features/navigation/Navigation";
import { SectionOne } from "./features/sectionOne/SectionOne";
import { SectionTwo } from "./features/sectionTwo/SectionTwo";
import { SectionThree } from "./features/sectionThree/SectionThree";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navigation />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</div>
	);
}

export default App;
