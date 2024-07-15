import { createActionGroup, createFeature, createReducer, emptyProps, on, props } from "@ngrx/store"


export const initialEngineState: EngineState = {
    locations: [],
    category: null,
    start_date: null,
    end_date: null,
    maxOccupancy: 0,
    areAnimalsAllowed: false,
    areBabiesAllowed: false,
}


export const engineActions = createActionGroup({
    source: 'Engine',
    events: {
        setCategory: props<{categoryID: number}>(),
        unsetCategory: emptyProps(),
    }
})

export const engineFeature = createFeature({
    name: 'Engine',

    reducer: createReducer(

        initialEngineState,

        on(engineActions.setCategory, (state, action) => {
            return {
                ...state,
                category: action.categoryID,
            }
        }),

        on(engineActions.unsetCategory, (state) => {
            return {
                ...state,
                category: null,
            }
        }),
        

    ),

})