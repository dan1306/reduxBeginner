import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
  const counter = useSelector(state => {
    return state.counterReducer
  })
  const isLogged = useSelector(state => {
    return state.loggedReducer
  })
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
      <h1>Counter {counter}</h1>
      
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      
            

      </div>

      <div>
      {isLogged ? <h1>You should not see</h1> : <h1> Available to view</h1>}
      <button onClick={()=> dispatch(signIn())}>Sign In</button>
      {/* <button onClick={()=> dispatch(decrement(5))}>Sign Out</button> */}
      
      </div>
      
    </div>
  );
}

export default App;
