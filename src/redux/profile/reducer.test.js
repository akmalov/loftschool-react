import reducer from "./reducer";

describe("profile reducer", () => {
  it("should work with INIT", () => {
    expect(
      reducer([], {
        type: "profile/INIT"
      })
    ).toEqual({
      submitted: false,
    });
  });

  it("should work with CREATE_REQUEST", () => {
    expect(
      reducer([], {
        type: "profile/CREATE_REQUEST"
      })
    ).toEqual({
      error: null,
      isLoading: true,
      submitted: false
    });
  });

  it("should work with CREATE_SUCCESS", () => {
    expect(
      reducer([], {
        type: "profile/CREATE_SUCCESS",
        payload: {card: "card"}
      })
    ).toEqual({
      card: {card: "card"},
      error: null,
      isLoading: false,
      submitted: true
    });
  });

  it("should work with CREATE_FAILURE", () => {
    expect(
      reducer([], {
        type: "profile/CREATE_FAILURE",
        payload: "error"
      })
    ).toEqual({
      error: "error",
      isLoading: false
    });
  });

  it("should work with FETCH_REQUEST", () => {
    expect(
      reducer([], {
        type: "profile/FETCH_REQUEST"
      })
    ).toEqual({
      error: null,
      isLoading: true,
      submitted: false,
      card: null
    });
  });

  it("should work with FETCH_SUCCESS", () => {
    expect(
      reducer([], {
        type: "profile/FETCH_SUCCESS",
        payload: {card: "card"}
      })
    ).toEqual({
      card: {card: "card"},
      error: null,
      isLoading: false
    });
  });

  it("should work with FETCH_FAILURE", () => {
    expect(
      reducer([], {
        type: "profile/FETCH_FAILURE",
        payload: "error"
      })
    ).toEqual({
      error: "error",
      isLoading: false
    });
  });
});