import { ADD , REDUCE } from "./actionType";

export const actionWithdraw = (am)=>{
    return {type:REDUCE , payload:am}
}

export const actionDeposite = (am)=>{
    return {type:ADD , payload:am}
}