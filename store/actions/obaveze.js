export const PROMJENA_IZVRSENOSTI = 'PROMJENA_IZVRSENOSTI';

export const promjenaIzvrsenosti = (id) => {
  return {
    type: PROMJENA_IZVRSENOSTI,
    idObaveze: id
  };
};

export const UNOS_OBAVEZE = 'UNOS_OBAVEZE';

export const unosObaveze = novaObaveza => (
  { 
    type: UNOS_OBAVEZE,
    payload: novaObaveza
  });
