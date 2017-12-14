import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { Object } from 'core-js/library/web/timers';
import { Pizza } from '../../models/pizza.model';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

//pizzas state
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);

export function entitiesToArray(pEntity: any): Pizza[] {
    console.log(2,pEntity);
    let array = Object.keys(pEntity).map(id => pEntity[parseInt(id,10)]); 
    return array;
}