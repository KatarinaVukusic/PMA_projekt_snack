import { OBAVEZE } from '../../data/test-podaci';
import { PROMJENA_IZVRSENOSTI, UNOS_OBAVEZE } from '../actions/obaveze';

const pocetnoStanje = {
  sveObaveze: OBAVEZE,
  izvrseneObaveze: [],
};

function noviId(sveObaveze) {
  const maxId = sveObaveze.reduce((maxId, obaveza) => Math.max(obaveza.id, maxId), -1)
  return maxId + 1
}


const obavezaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_IZVRSENOSTI: {
      const odabran = state.izvrseneObaveze.findIndex(
        (obaveza) => obaveza.id === action.idObaveze
      );
      if (odabran >= 0) {
        const novaIzvrsenaObaveza = [...state.izvrseneObaveze]
        novaIzvrsenaObaveza.splice(odabran, 1)
        return {...state, izvrseneObaveze: novaIzvrsenaObaveza}
      } else {
        const obaveza = state.obaveze.find(obaveza => obaveza.id === action.idObaveze)
        return {...state, izvrseneObaveze: state.izvrseneObaveze.concat(obaveza)}
      } 
    }
    case UNOS_OBAVEZE:{
     return {
        ...state,
        sveObaveze: [
          ...state.sveObaveze,
          {
            id: noviId(state.sveObaveze),
            naziv: action.payload.naziv,
            datum: action.payload.datum,
            izvrseno: false
          }
        ],

      }
    }
    default:
      return state;
  }
};

export default obavezaReducer;
