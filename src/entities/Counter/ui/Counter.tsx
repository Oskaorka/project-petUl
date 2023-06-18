// import { classNames } from 'shared/lib/classNames/classNames';

import { StateSchema } from "app/provider/StoreProvider/config/StateSchema";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

// interface CounterProps {
//     className?: string;
// }
 
export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    };
    const decrement = () => {
        dispatch(counterActions.decrement())
    };
    return (
        <div>
            <h1 data-testid='value-title'>
                {counterValue}
            </h1>
            < Button 
                onClick={increment}
                data-testid='increment-btn'
                >
                increment
            </Button>
            < Button 
                data-testid='decrement-btn'
                onClick={decrement}
            >
                dencrement
            </Button>
         </div>
        )
}
 
// export default Counter;