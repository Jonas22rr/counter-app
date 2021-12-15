import React from "react";
import Select from "react-select";

const options = [
    { value: 25, label: "25" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
];
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px solid lightgray",
        color: state.isSelected ? "white" : "black",
        padding: 20,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "#EFEFEF 300ms";

        return { ...provided, opacity, transition };
    },
};

class MySelect extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            input: 0,
        };

        this.selectValue = this.selectValue.bind(this);
    }

    async selectValue(event) {
        await this.setState({
            input: event.value,
        });

        window.input = this.state.input;
    }

    render() {
        return (
            <Select
                onChange={this.selectValue}
                options={options}
                styles={customStyles}
            />
        );
    }
}

export default MySelect;
