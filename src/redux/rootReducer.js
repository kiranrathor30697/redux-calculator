import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBSTRACTION } from "./constants";
/* const initialState={
    result:0,
    leftvalue:null,
    operator:null,
    right
}; */
export const rootReducer = (initialState,action)=>{

let newState = initialState;

    switch (action.type) {
        case ADDITION:
            //alert('ADDITION');
            console.log(newState)
            newState.operator = ADDITION
            break;

        case SUBSTRACTION:
            //alert('SUBSTRACTION');
            console.log(newState)
            newState.operator = SUBSTRACTION
            break;

        case MULTIPLICATION:
            //alert('MULTIPLICATION');
            console.log(newState)
            newState.operator = MULTIPLICATION
            break;

        case DIVISION:
            //alert('DIVISION');
            console.log(newState)
            newState.operator = DIVISION
            break;

        case RESULT:
            //alert('RESULT');
            console.log(newState)
            switch(newState.operator){
                case ADDITION:
                    newState.result = newState.leftvalue + newState.rightvalue
                    break;
                case SUBSTRACTION:
                    newState.result = newState.leftvalue - newState.rightvalue
                    break;
                case  MULTIPLICATION:
                    newState.result = newState.leftvalue * newState.rightvalue
                    break;
                case DIVISION:
                    newState.result = newState.leftvalue / newState.rightvalue
                    break;
                    
            }
            
            break;

        case CLEAR:
            //alert('CLEAR');
            console.log(newState)
            newState.result= 0;
            newState.leftvalue = '';
            newState.operator = '';
            newState.rightvalue = '';
            break;

        case NUMBER:
            console.log('NUMBER');
            console.log(newState);
            if(newState.operator === ''){
                if(newState.leftvalue === ''){
                    newState.leftvalue = parseInt(action.number)
                }else{
                    newState.leftvalue = parseInt(newState.leftvalue + action.number)
                } 
            }else{
                if(newState.rightvalue === ''){
                    newState.rightvalue = parseInt(action.number)
                }else{
                    newState.rightvalue = parseInt(newState.rightvalue + action.number)
                }
            }
            break;

        default:
    }


    return newState;
}