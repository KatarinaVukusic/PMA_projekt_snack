import { OBAVEZE } from '../../data/test-podaci';
import { PROMJENA_IZVRSENOSTI, UNOS_OBAVEZE } from '../actions/obaveze';

const pocetnoStanje = {
  sveObaveze: OBAVEZE,
  izvrseneObaveze: [],
  neizvrseneObaveze: OBAVEZE
  
};

function noviId(sveObaveze) {
  const maxId = sveObaveze.reduce((maxId, obaveza) => Math.max(obaveza.id, maxId), -1)
  const maxId2 = sveObaveze.reduce((maxId, obaveza) => Math.max(obaveza.id, maxId), -1)
  console.log(maxId2)
  if(maxId > maxId2){
    return maxId + 1
  }
  else if (maxId < maxId2){
    return maxId2 + 1
  }
  else{
    return maxId+1
  }
}


const obavezaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_IZVRSENOSTI: {
      const odabran = state.izvrseneObaveze.findIndex(
        (oo) => oo.id === action.idObaveze
      );
      if (odabran >= 0) {
        const novaIzvrsenaObaveza = [...state.izvrseneObaveze]
        novaIzvrsenaObaveza.splice(odabran, 1)
        const obb = state.izvrseneObaveze.find((oo) => oo.id===action.idObaveze);
        return {...state, izvrseneObaveze: novaIzvrsenaObaveza, neizvrseneObaveze: state.neizvrseneObaveze.concat(obb)}
      } else {
        const obaveza = state.sveObaveze.find((ob) => ob.id === action.idObaveze)
        return{...state, izvrseneObaveze: state.izvrseneObaveze.concat(obaveza),neizvrseneObaveze: state.neizvrseneObaveze.filter((obb) => obb.id !=action.idObaveze)}       
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
        neizvrseneObaveze: [
           ...state.neizvrseneObaveze,
          {
            id: noviId(state.izvrseneObaveze),
            naziv: action.payload.naziv,
            datum: action.payload.datum,
            izvrseno: false
          }
        ]

      }
    }
    default:
      return state;
  }
};

export default obavezaReducer;
