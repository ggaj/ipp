// import { takeLatest, call, put, all } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import { signInSuccess, signFailure } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* churchRegister({ payload }) {
  try {
    const { name, cep, address, number, state, city, ref, comp } = payload;

    yield call(api.post, 'churches', {
      name,
      cep,
      address,
      number,
      state,
      city,
      ref,
      comp,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro da Igreja');
    // yield put(signFailure());
  }
}

export default all([takeLatest('@church/REGISTER_REQUEST', churchRegister)]);
