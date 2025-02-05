import {
  allOrderReducer,
  getAllOrders,
  getOrderByNumber,
  TAllOrders
} from '../slices/listOrdersSlice';

describe('test slice allOrders', () => {
  let initialState: TAllOrders;
  beforeAll(() => {
    initialState = {
      orders: [],
      orderByNumber: null,
      error: null,
      loading: false
    };
  });

  test('test action getAllOrders (pending)', () => {
    const state = allOrderReducer(initialState, {
      type: getAllOrders.pending.type
    });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action  getAllOrders (fulfilled)', () => {
    const moclAllOrders = {
      orders: [
        {
          _id: '643d69a5c3f7b9001cfa094a',
          ingredients: ['643d69a5c3f7b9001cfa0949'],
          status: 'done',
          name: 'Краторный бургер',
          createdAt: '2025-02-04T11:21:29.421Z',
          updatedAt: '2025-02-04T11:21:30.308Z',
          number: 87898
        },
        {
          _id: '67727f87750864001d376a16',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093f',
            '643d69a5c3f7b9001cfa0948',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный spicy альфа-сахаридный бессмертный бургер',
          createdAt: '2025-02-04T11:21:59.691Z',
          updatedAt: '2025-02-04T11:21:00.642Z',
          number: 34575
        },
        {
          _id: '67727e5e750864001d376a15',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2025-02-04T11:21:02.619Z',
          updatedAt: '2025-02-04T11:21:03.638Z',
          number: 67658
        }
      ]
    };
    const state = allOrderReducer(initialState, {
      type: getAllOrders.fulfilled.type,
      payload: moclAllOrders
    });
    expect(state.loading).toBe(false);
    expect(state.orders).toEqual(moclAllOrders);
  });

  test('test action getAllOrders rejected', () => {
    const mockError = 'error';
    const state = allOrderReducer(initialState, {
      type: getAllOrders.rejected.type,
      error: { message: mockError }
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBe(mockError);
  });

  test('test action getOrderByNumber pending', () => {
    const state = allOrderReducer(initialState, {
      type: getOrderByNumber.pending.type
    });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action getOrderByNumber fulfilled', () => {
    const mockOrder = {
      _id: '6772801d750864001d376a17',
      ingredients: ['643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный бургер',
      createdAt: '2025-02-04T11:21:29.421Z',
      updatedAt: '2025-02-04T11:21:30.308Z',
      number: 46576
    };

    const state = allOrderReducer(initialState, {
      type: getOrderByNumber.fulfilled.type,
      payload: { orders: [mockOrder] }
    });

    expect(state.loading).toBe(false);
    expect(state.orderByNumber).toEqual(mockOrder);
  });

  test('test action getOrderByNumber rejected', () => {
    const mockError = 'errorr';
    const state = allOrderReducer(initialState, {
      type: getOrderByNumber.rejected.type,
      error: { message: mockError }
    });

    expect(state.loading).toBe(false);
    expect(state.error).toBe(mockError);
  });
});
