
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AdditionActionCreator, ClearActionCreator, DivisionActionCreator, MultiplicationActionCreator, NumberActionCreator, ResultActionCreator, SubstractionActionCreator } from './redux/actionCreators';
import { ADDITION, DIVISION, MULTIPLICATION, SUBSTRACTION } from './redux/constants';


function App() {
  //1. State / Hook variable
  let state = useSelector((storeObject)=>{
    return storeObject;
  })

  let dispatch = useDispatch();


  //2. function definition
    

  //3.Return Statement
  return (
    <div className="App">
      <div className="calculator">
        <input type="text" className="calculator-screen" defaultValue={'0'} disabled />
        {console.log(state.result)}
        <div className="calculator-keys">
          <button type="button" className="operator" value={ADDITION} onClick={()=>{dispatch(AdditionActionCreator())} }>+</button>
          <button type="button" className="operator" value={SUBSTRACTION} onClick={()=>{dispatch(SubstractionActionCreator())} }>-</button>
          <button type="button" className="operator" value={MULTIPLICATION} onClick={()=>{dispatch(MultiplicationActionCreator())} }>×</button>
          <button type="button" className="operator" value={DIVISION} onClick={()=>{dispatch(DivisionActionCreator())} }>÷</button>
          <button type="button" value={7} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>7</button>
          <button type="button" value={8} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>8</button>
          <button type="button" value={9} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>9</button>
          <button type="button" value={4} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>4</button>
          <button type="button" value={5} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>5</button>
          <button type="button" value={6} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>6</button>
          <button type="button" value={1} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>1</button>
          <button type="button" value={2} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>2</button>
          <button type="button" value={3} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>3</button>
          <button type="button" value={0} onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>0</button>
          <button type="button" className="decimal" value="." onClick={(e)=>{dispatch(NumberActionCreator(e.target.value))}}>.</button>
          <button type="button" className="all-clear" value="all-clear" onClick={()=>{dispatch(ClearActionCreator())} }>AC</button>
          <button type="button" className="equal-sign" value="=" onClick={()=>{dispatch(ResultActionCreator())} }>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
