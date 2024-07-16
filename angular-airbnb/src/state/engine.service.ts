import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { engineActions, engineFeature } from "./engine.store";

@Injectable({
    providedIn: 'root',
})

export class EngineService {

    store = inject(Store)

    houseCategory$$ = this.store.selectSignal(engineFeature.selectHouseCategory)

    setHouseCategory (houseCategoryID: number) {
        this.store.dispatch(engineActions.setHouseCategory({houseCategoryID}))
    }

    unsetHouseCategory () {
        this.store.dispatch(engineActions.unsetHouseCategory())
    }

}