import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            numberOne: '',
            numberTwo: '',
            resultValue: '',
            resultStatus: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firstValueHandler = this.firstValueHandler.bind(this);
        this.secondValueHandler = this.secondValueHandler.bind(this);
    }

    handleChange(event) {
        this.setState({numberOne: event.target.value});
    }

    add() {
        const body = JSON.stringify({numberOne: this.state.numberOne, numberTwo: this.state.numberTwo});
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.post('http://localhost:8080/calculator/addition', body, {headers})
            .then(response => {
                this.setState({resultValue: response.data.resultValue});
                this.setState({resultStatus: response.data.resultStatus});
            });
    }

    sub() {
        const body = JSON.stringify({numberOne: this.state.numberOne, numberTwo: this.state.numberTwo});
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.post('http://localhost:8080/calculator/subtraction', body, {headers})
            .then(response => {
                this.setState({resultValue: response.data.resultValue});
                this.setState({resultStatus: response.data.resultStatus});
            });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    firstValueHandler(event) {
        this.setState({numberOne: event.target.value});
    }

    secondValueHandler(event) {
        this.setState({numberTwo: event.target.value});
    }

    // const a = useStyles();
    render() {
        return (
            <div className="Checkout">
                <body className="Checkout-body">
                <form noValidate autoComplete="off">
                    <TextField type="number" value={this.state.numberOne} onChange={this.firstValueHandler}
                               id="standard-basic" label="First Value"/>
                    <TextField type="number" value={this.state.numberTwo} onChange={this.secondValueHandler}
                               id="standard-basic" label="Second Value"/>
                </form>

                <form noValidate autoComplete="off">
                    <Button onClick={() => {
                        this.add()
                    }} variant="contained">Addition</Button>
                    <Button onClick={() => {
                        this.sub()
                    }} variant="contained">Subtraction</Button>
                </form>
                <form noValidate autoComplete="off">
                    <TextField type="number" value={this.state.resultValue} id="standard-basic" label="Result Value"/>
                    <TextField value={this.state.resultStatus} id="standard-basic" label="Result Message"/>
                </form>
                </body>
            </div>
        );
    }
}