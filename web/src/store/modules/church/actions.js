export function churchRegisterRequest(
  name,
  cep,
  address,
  number,
  state,
  city,
  ref,
  comp
) {
  return {
    type: '@church/REGISTER_REQUEST',
    payload: { name, cep, address, number, state, city, ref, comp },
  };
}
