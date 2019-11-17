import reducer from "./reducer";

describe("bank card reducer", () => {
  it("should work with CARD_POST_REQUEST", () => {
    expect(
      reducer([], {
        type: "CARD_POST_REQUEST"
      })
    ).toEqual({
      isLoading: true,
      expiryDate: new Date('2019-12'),
      cardName: '',
      cardNumber: '',
      cvc: '',
      error: null
    });
  });

  it("should work with CARD_POST_SUCCESS", () => {
    expect(
      reducer([], {
        type: "CARD_POST_SUCCESS",
        payload: {
          isLoading: false,
          expiryDate: new Date("2019-12"),
          cardName: 'TEST TESTOV',
          cardNumber: '1111222233334444',
          cvc: '123'
        }
      })
    ).toEqual({
      isLoading: false,
      expiryDate: new Date("2019-12"),
      cardName: 'TEST TESTOV',
      cardNumber: '1111222233334444',
      cvc: '123',
      error: null
    });
  });

  it("should work with CARD_POST_FAILURE", () => {
    expect(
      reducer([], {
        type: "CARD_POST_FAILURE",
        payload: "error"
      })
    ).toEqual({
      isLoading: false,
      expiryDate: new Date('2019-12'),
      cardName: '',
      cardNumber: '',
      cvc: '',
      error: "error"
    });
  });
});