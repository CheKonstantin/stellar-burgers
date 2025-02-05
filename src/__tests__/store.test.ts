import { allOrderReducer } from '../slices/listOrdersSlice';
import { constructorReducer } from '../slices/customBurgerSlice';
import { feedReducer } from '../slices/feedSlice';
import { orderReducer } from '../slices/orderSlice';
import { userReducer } from '../slices/userSlice';
import { TIngredient } from '../utils/types';
import { rootReducer } from '../services/store';
import { ingredientsReducer } from '../slices/ingredientsSlice';

describe('test root reducer', () => {
  it('inition', () => {
    const initialState = rootReducer(undefined, { type: '@@INIT' });
    expect(initialState).toEqual({
      ingredients: ingredientsReducer(undefined, { type: '@@INIT' }),
      burgerConstructor: constructorReducer(undefined, { type: '@@INIT' }),
      order: orderReducer(undefined, { type: '@@INIT' }),
      feed: feedReducer(undefined, { type: '@@INIT' }),
      user: userReducer(undefined, { type: '@@INIT' }),
      orders: allOrderReducer(undefined, { type: '@@INIT' })
    });
  });
  it('return start state', () => {
    const initialState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(initialState).toEqual({
      ingredients: {
        ingredients: [] as TIngredient[],
        loading: false,
        error: null as string | null
      },
      burgerConstructor: {
        ingredients: [],
        bun: null
      },
      order: {
        loading: false,
        order: null,
        error: null
      },
      feed: {
        loading: false,
        orders: [],
        error: null as string | null,
        total: 0,
        totalToday: 0
      },
      user: {
        loading: false,
        error: null,
        isAuthenticated: false,
        user: null,
        isAuthChecked: false
      },
      orders: {
        orders: [],
        orderByNumber: null,
        error: null,
        loading: false
      }
    });
  });
});
