import { newOrder, orderReducer, TOrderState } from '../slices/orderSlice';

describe('test slice orderSlice', () => {
  let initialState: TOrderState;

  beforeEach(() => {
    initialState = {
      loading: false,
      order: null,
      error: null
    };
  });

  test('test action pending', () => {
    const state = orderReducer(initialState, { type: newOrder.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action fulfilled', () => {
    const mockOrder = {
      ingredients: [
        {
          _id: '643d69a5c3f7b9001cfa093c',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1550,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0948',
          name: 'Кристаллы марсианских альфа-сахаридов',
          type: 'main',
          proteins: 234,
          fat: 432,
          carbohydrates: 111,
          calories: 189,
          price: 762,
          image: 'https://code.s3.yandex.net/react/code/core.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/core-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0942',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0
        }
      ],
      _id: '67718abf750864001d3768ee',
      status: 'done',
      name: 'Флюоресцентный spicy альфа-сахаридный бургер',
      createdAt: '2024-12-29T17:45:35.232Z',
      updatedAt: '2024-12-29T17:45:36.189Z',
      number: 64532
    };

    const state = orderReducer(initialState, {
      type: newOrder.fulfilled.type,
      payload: { order: mockOrder }
    });
    expect(state.loading).toBe(false);
    expect(state.order).toEqual(mockOrder);
  });

  test('test action rejected', () => {
    const mockError = 'Failed ';
    const state = orderReducer(initialState, {
      type: newOrder.rejected.type,
      error: { message: mockError }
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBe(mockError);
  });
});
