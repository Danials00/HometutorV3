import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_login: false,
  req_session_time: 0,
  res_session_time: 0,
  session: {
    data: null,
    is_loading: false,
    status: false,
  },
};

const app: any = createSlice({
  name: 'user',
  initialState: { ...initialState },
  reducers: {
    reset: () => initialState,

    handleIsLogin: (state, action: any) => {
      state.is_login = action.payload.is_login;
    },
    handleReqSessionTime: (state) => {
      state.req_session_time = new Date().getTime();
    },
    handleUserSession: (state, action: any) => {
      if (!action.payload.is_loading && action.payload.data) {
        state.session.data = action.payload.data;
        state.session.status = true;
        state.res_session_time = new Date().getTime();
      } else if (!action.payload.is_loading && !action.payload.data) {
        state.session.status = false;
        state.session.data = null;
        state.res_session_time = 0;
      }
      state.session.is_loading = action.payload.is_loading;
    },
  },
});

export const {
  handleIsLogin,
  handleReqSessionTime,
  handleUserSession,

  reset,
} = app.actions;
export default app.reducer;