import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBSTRACTION } from "./constants"

export const AdditionActionCreator = ()=>{
    return {
        type:ADDITION
    }
}
export const SubstractionActionCreator = ()=>{
    return {
        type:SUBSTRACTION
    }
}
export const MultiplicationActionCreator = ()=>{
    return {
        type:MULTIPLICATION
    }
}
export const DivisionActionCreator = ()=>{
    return {
        type:DIVISION
    }
}
export const ResultActionCreator = (num)=>{
    return {
        type:RESULT,
        number:num
    }
}

export const ClearActionCreator = ()=>{
    return {
        type:CLEAR
    }
}
export const NumberActionCreator = (num)=>{
    return {
        type:NUMBER,
        number:num
    }
}
