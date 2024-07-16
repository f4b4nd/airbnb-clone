import { createActionGroup, createFeature, createReducer, emptyProps, on, props } from "@ngrx/store"


export const initialEngineState: EngineState = {
    locations: [],
    houseCategory: null,
    start_date: null,
    end_date: null,
    maxOccupancy: 0,
    areAnimalsAllowed: false,
    areBabiesAllowed: false,
}


export const engineActions = createActionGroup({
    source: 'Engine',
    events: {
        setHouseCategory: props<{houseCategoryID: number}>(),
        unsetHouseCategory: emptyProps(),
    }
})

export const engineFeature = createFeature({
    name: 'Engine',

    reducer: createReducer(

        initialEngineState,

        on(engineActions.setHouseCategory, (state, action) => {
            return {
                ...state,
                houseCategory: action.houseCategoryID,
            }
        }),

        on(engineActions.unsetHouseCategory, (state) => {
            return {
                ...state,
                houseCategory: null,
            }
        }),
        

    ),

})