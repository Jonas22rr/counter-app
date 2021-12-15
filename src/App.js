import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import MySelect from "./Select";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {
        let counter = parseFloat(localStorage.getItem("counter"));
        if (isNaN(parseFloat(counter)) === true) {
            localStorage.setItem("counter", 0);
            window.counter = counter;
            await this.setState({
                count: counter,
            });
        } else {
            window.counter = counter;
            await this.setState({
                count: counter,
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>PushUp Counter</h1>
                    <MySelect />
                    <Button
                        name="Add"
                        delete="Delete"
                        onClick={this.onBtnClick}
                        message="bitte selektiere zuerst einen Wert!"
                        counter={this.state.count}
                    ></Button>
                </header>
            </div>
        );
    }
}

export default App;
