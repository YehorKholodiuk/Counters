import React, {useState} from 'react';

const CounterArray = () => {
    const [counters, setCounters] = useState([1, 2, 3])
    const changeCounter = (value, ind) => {
        const newCounters = counters.map((counter, index) =>
            index === ind ? counter + value : counter)
        setCounters(newCounters)

    }
    return (
        <div>
            {counters.map((counter, index) => (<div>
                <button onClick={() => {
                    changeCounter(-1, index)
                }}>-
                </button>
                {counter}
                <button onClick={() => {
                    changeCounter(1, index)
                }}>+
                </button>
            </div>))}
        </div>
    );
};

export default CounterArray;
