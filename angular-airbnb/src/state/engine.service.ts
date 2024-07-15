import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { engineActions, engineFeature } from "./engine.store";

@Injectable({
    providedIn: 'root',
})

export class EngineService {

    store = inject(Store)

    category$$ = this.store.selectSignal(engineFeature.selectCategory)

    setCategory (categoryID: number) {
        this.store.dispatch(engineActions.setCategory({categoryID}))
    }

    unsetCategory () {
        this.store.dispatch(engineActions.unsetCategory())
    }

}