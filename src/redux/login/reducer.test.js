import reducer from "./reducer";

describe("login reducer", () => {
  it("should work with LOGIN_REQUEST", () => {
    expect(
      reducer([], {
        type: "LOGIN_REQUEST"
      })
    ).toEqual({
      isLoading: true,
      token: null,
      error: null,
      isLoggedIn: false,
    });
  });

  it("should work with LOGIN_SUCCESS", () => {
    expect(
      reducer([], {
        type: "LOGIN_SUCCESS",
        payload: "token"
      })
    ).toEqual({
      isLoading: false,
      token: "token",
      error: null,
      isLoggedIn: true,
    });
  });

  it("should work with LOGIN_FAILURE", () => {
    expect(
      reducer([], {
        type: "LOGIN_FAILURE",
        payload: "error"
      })
    ).toEqual({
      isLoading: false,
      token: null,
      error: "error",
      isLoggedIn: false,
    });
  });

  it("should work with LOGOUT", () => {
    expect(
      reducer([], {
        type: "LOGOUT"
      })
    ).toEqual({
      isLoading: false,
      token: null,
      error: null,
      isLoggedIn: false,
    });
  });
});