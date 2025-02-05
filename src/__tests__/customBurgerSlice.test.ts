import {
  addBunsandIngredients,
  constructorSlice,
  deleteIngredients,
  moveIngredient,
  TConstructorState
} from '../slices/customBurgerSlice';

describe('test reduser constructor', () => {
  let initialState: TConstructorState;

  beforeEach(() => {
    initialState = {
      ingredients: [],
      bun: null
    };
  });
  test('add action bun', () => {
    const bun = {
      _id: '643d69a5c3f7b9001cfa093d',
      name: 'Флюоресцентная булка R2-D3',
      type: 'bun',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/bun-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
      __v: 0
    };
    const newState = constructorSlice.reducer(
      initialState,
      addBunsandIngredients(bun)
    );
    expect(newState.bun).toEqual(expect.objectContaining(bun));
    expect(newState.ingredients).toHaveLength(0);
  });
  test('add action ingr main', () => {
    const mainIngredient = {
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
    };
    const newState = constructorSlice.reducer(
      initialState,
      addBunsandIngredients(mainIngredient)
    );
    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients[0]).toEqual(
      expect.objectContaining(mainIngredient)
    );
  });
  test('del ingr', () => {
    const stateWithIngredients = {
      ...initialState,
      ingredients: [
        {
          id: '643d69a5c3f7b9001cfa0948',
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
          id: '643d69a5c3f7b9001cfa0942',
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
      ]
    };

    const newState = constructorSlice.reducer(
      stateWithIngredients,
      deleteIngredients('643d69a5c3f7b9001cfa0948')
    );

    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients[0].id).toBe('643d69a5c3f7b9001cfa0942');
  });

  test('add action change order ingr', () => {
    const stateWithIngredients = {
      ...initialState,
      ingredients: [
        {
          id: '643d69a5c3f7b9001cfa0948',
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
          id: '643d69a5c3f7b9001cfa0942',
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
      ]
    };
    const newState = constructorSlice.reducer(
      stateWithIngredients,
      moveIngredient({ from: 0, to: 1 })
    );
    expect(newState.ingredients).toHaveLength(2);
    expect(newState.ingredients[0].id).toBe('643d69a5c3f7b9001cfa0942');
    expect(newState.ingredients[1].id).toBe('643d69a5c3f7b9001cfa0948');
  });
});
