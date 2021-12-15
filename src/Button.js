import React from "react";
import "./Button.css";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            message: "",
        };

        this.onBtnClick = this.onBtnClick.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    async onBtnClick() {
        if (this.state.count === 0) {
            await this.setState({
                count: this.state.count + this.props.counter,
            });
        }
        if (window.input !== "" && window.input !== undefined) {
            await this.setState({
                count: this.state.count + window.input,
            });
            localStorage.setItem("counter", this.state.count);
        } else {
            alert(this.props.message);
        }
    }

    async onDelete() {
        if (this.state.count === 0) {
            await this.setState({
                count: this.state.count + this.props.counter,
            });
        }
        if (window.input !== "" && window.input !== undefined) {
            await this.setState({
                count: this.state.count - window.input,
            });
            localStorage.setItem("counter", this.state.count);
        } else {
            alert(this.props.message);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onBtnClick} className="Button-style">
                    {this.props.name}
                </button>
                <button onClick={this.onDelete} className="Button-style">
                    {this.props.delete}
                </button>
                <h2>
                    {this.state.count !== 0
                        ? this.state.count
                        : isNaN(parseFloat(this.props.counter)) === true
                        ? 0
                        : this.props.counter}
                </h2>
            </div>
        );
    }
}

export default Button;
