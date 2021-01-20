import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import Calculator from "./calculator/Calculator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function App() {

    const classes = useStyles();
    return (
        <div className="Checkout">
            <body className="Checkout-body">
            <Calculator></Calculator>
            </body>
        </div>
    );
}

export default App;
