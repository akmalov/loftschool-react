import reducer from "./reducer";

describe("auth reducer", () => {
  it("should work with REGISTER_REQUEST", () => {
    expect(
      reducer([], {
        type: "REGISTER_REQUEST"
      })
    ).toEqual({
      isLoading: true,
      token: null,
      error: null
    });
  });

  it("should work with REGISTER_SUCCESS", () => {
    expect(
      reducer([], {
        type: "REGISTER_SUCCESS",
        payload: "token"
      })
    ).toEqual({
      isLoading: false,
      token: "token",
      error: null
    });
  });

  it("should work with REGISTER_FAILURE", () => {
    expect(
      reducer([], {
        type: "REGISTER_FAILURE",
        payload: "error"
      })
    ).toEqual({
      isLoading: false,
      token: null,
      error: "error"
    });
  });
});