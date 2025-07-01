import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';
// Importe la fonction createSlice pour créer un slice Redux, et PayloadAction pour typer les actions.

interface NavState {
  visible: boolean;
}
// Déclare l'interface du state du slice : ici, un booléen "visible" pour afficher ou cacher le nav.

const initialState: NavState = {
  visible: false,
};
// Définit l'état initial du nav : visible par défaut.

const navSlice = createSlice({
    name: 'nav',
    // Nom du slice, utilisé dans les actions et le store.
    initialState,
    // L'état initial défini plus haut.
    reducers: {
        setNavVisible(state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
        // Action pour définir explicitement la visibilité du nav (true ou false).
        toggleNav(state) {
            state.visible = !state.visible;
        },
        // Action pour inverser la visibilité du nav (true devient false, et inversement).
    },
});
// Crée le slice avec ses reducers et actions.

export const { setNavVisible, toggleNav } = navSlice.actions;
// Exporte les actions générées pour pouvoir les utiliser dans tes composants.
export const visible = (state: RootState) => state.nav.visible

export default navSlice.reducer;
// Exporte le reducer pour l'ajouter au store Redux.