import {
  forgotPassword,
  getUser,
  login,
  logout,
  register,
  TUserData,
  update,
  userReducer
} from '../slices/userSlice';

describe('test reduser user', () => {
  let initialState: TUserData;
  const mockName = {
    user: {
      email: 'kostya@yandex.ru',
      name: 'Костя'
    }
  };

  const updateMockName = {
    user: {
      email: 'kostya2@yandex.ru',
      name: 'Костя'
    }
  };

  beforeEach(() => {
    initialState = {
      loading: false,
      error: null,
      isAuthenticated: false,
      user: null,
      isAuthChecked: false
    };
  });

  test('test action getUser pending', () => {
    const state = userReducer(initialState, { type: getUser.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
    expect(state.isAuthenticated).toBe(false);
  });
  test('test action getUser fulfilled', () => {
    const state = userReducer(initialState, {
      type: getUser.fulfilled.type,
      payload: mockName
    });
    expect(state.isAuthenticated).toBe(true);
    expect(state.isAuthChecked).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockName.user);
  });
  test('test action getUser rejected', () => {
    const mockError = 'Ошибка при получении данных пользователя';
    const state = userReducer(initialState, {
      type: getUser.rejected.type,
      error: { message: mockError }
    });
    expect(state.loading).toBe(false);
    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe(mockError);
  });

  test('test action register pending', () => {
    const state = userReducer(initialState, { type: register.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action register fulfilled', () => {
    const state = userReducer(initialState, {
      type: register.fulfilled.type,
      payload: mockName
    });
    expect(state.loading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(mockName.user);
  });

  test('test action register rejected', () => {
    const mockError = 'Ошибка при регистрации';
    const state = userReducer(initialState, { type: register.rejected.type });
    expect(state.loading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.error).toBe(mockError);
  });

  test('test action login pending', () => {
    const state = userReducer(initialState, { type: login.pending.type });
    expect(state.loading).toBe(true);
    expect(state.isAuthChecked).toBe(false);
    expect(state.error).toBe(null);
  });

  test('test action login fulfilled', () => {
    const state = userReducer(initialState, {
      type: login.fulfilled.type,
      payload: mockName
    });
    expect(state.loading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(mockName.user);
  });

  test('test action login rejected', () => {
    const mockError = 'Ошибка при входе';
    const state = userReducer(initialState, { type: login.rejected.type });
    expect(state.loading).toBe(false);
    expect(state.isAuthenticated).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.error).toBe(mockError);
  });

  test('test action update pending', () => {
    const state = userReducer(initialState, { type: update.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action update fulfilled', () => {
    const state = userReducer(initialState, {
      type: update.fulfilled.type,
      payload: updateMockName
    });
    expect(state.loading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(updateMockName.user);
  });
  test('test action update rejected', () => {
    const mockError = 'Ошибка при обновлении данных';
    const state = userReducer(initialState, { type: update.rejected.type });
    expect(state.loading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.error).toBe(mockError);
  });

  test('test action logout fulfilled', () => {
    const state = userReducer(initialState, { type: logout.fulfilled.type });
    expect(state.loading).toBe(false);
    expect(state.user).toBe(null);
    expect(state.isAuthChecked).toBe(true);
    expect(state.isAuthenticated).toBe(false);
  });

  test('test action logout  rejected', () => {
    const mockError = 'Ошибка выхода';
    const state = userReducer(initialState, {
      type: logout.rejected.type,
      error: { message: mockError }
    });
    expect(state.isAuthChecked).toBe(true);
    expect(state.isAuthenticated).toBe(true);
    expect(state.error).toBe(mockError);
  });
});
