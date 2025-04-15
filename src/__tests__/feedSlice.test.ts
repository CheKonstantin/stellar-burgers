import { feedReducer, feedState, getFeed } from '../slices/feedSlice';

describe('test reducer feed', () => {
  let initialState: feedState;

  beforeEach(() => {
    initialState = {
      loading: false,
      orders: [],
      error: null as string | null,
      total: 0,
      totalToday: 0
    };
  });

  test('test action getFeed pending', () => {
    const state = feedReducer(initialState, { type: getFeed.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('test action getFeed fulfilled', () => {
    const mockFeed = {
      orders: [
        {
          _id: '643d69a5c3f7b9001cfa093c',
          ingredients: ['643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный бургер',
          createdAt: '2025-02-04T11:20:40.421Z',
          updatedAt: '2025-02-04T11:20:40.308Z',
          number: 35446
        },
        {
          _id: '67727f87750864001d376a16',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093f',
            '643d69a5c3f7b9001cfa0948'
          ],
          status: 'done',
          name: 'Флюоресцентный spicy альфа-сахаридный бессмертный бургер',
          createdAt: '2025-02-04T11:20:40.691Z',
          updatedAt: '2025-02-04T11:20:40.642Z',
          number: 46766
        },
        {
          _id: '67727e5e750864001d376a15',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2025-02-04T11:20:40.619Z',
          updatedAt: '2025-02-04T11:20:40.638Z',
          number: 43637
        }
      ],
      total: 20,
      totalToday: 5
    };
    const state = feedReducer(initialState, {
      type: getFeed.fulfilled.type,
      payload: mockFeed
    });

    expect(state.loading).toBe(false);
    expect(state.orders).toEqual(mockFeed.orders);
    expect(state.total).toEqual(mockFeed.total);
    expect(state.totalToday).toEqual(mockFeed.totalToday);
  });

  test('test action getFeed rejected', () => {
    const mockError = 'error';
    const state = feedReducer(initialState, {
      type: getFeed.rejected.type,
      error: { message: mockError }
    });

    expect(state.loading).toBe(false);
    expect(state.error).toBe(mockError);
  });
});
