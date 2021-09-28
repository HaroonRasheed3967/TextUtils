import "./App.css";
import Navbar from './components/Navbar'
import FormText from './components/FormText'
// import About from "./components/About";
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route
// } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light')

	const [alert, setAlert] = useState(null)
	const [background, setBackground] = useState(null)
	const toggleMode = () => {
		if (mode === 'light') {
			setMode("dark")
			document.body.style.background = '#111122'
			showAlert("Dark mode has been enabled", "success")
		} else {
			setMode("light")
			document.body.style.background = 'white'
			showAlert("Light mode has been enabled", "success")
		}
	}

	const backgroundColor = (color) => {
		setBackground({
			color: color
		})
	}

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null)
		}, 2000);
	}

	return (
		<>
			{/* <Router> */}
			<Navbar title="TextUtils" aboutText="About" mode={mode} background={background} backgroundColor={backgroundColor} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				{/* <Switch> */}
				{/* <Route exact path="/about"> */}
				{/* <About /> */}
				{/* </Route> */}
				{/* <Route exact path="/"> */}
				<FormText heading="Text Case Converter" mode={mode} background={background} backgroundColor={backgroundColor} showAlert={showAlert} />
				{/* </Route> */}
				{/* </Switch> */}
			</div>
			{/* </Router> */}
		</>
	);
}

export default App;
