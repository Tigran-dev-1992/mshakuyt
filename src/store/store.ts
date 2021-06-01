import { combineReducers, createStore } from "redux";
import { churchesReducer } from "./reducers/church-reducer";
import { fortressesReducer } from "./reducers/fortresses-reducer";
import { modaleReducer } from "./reducers/modale-reducer";
import { otherReducer } from "./reducers/other-reducer";
import { templesReducer } from "./reducers/temple-reducer";

type ProprtisType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ProprtisType<T>>


const rootReducer = combineReducers({
     churches: churchesReducer ,
     modale :modaleReducer,
     temples :templesReducer,
     fortresses : fortressesReducer,
     others: otherReducer
    })

export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

