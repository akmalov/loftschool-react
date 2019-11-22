import reducer from "./reducer";

describe("map reducer", () => {
  it("should work with INIT", () => {
    expect(
      reducer([], {
        type: "map/INIT"
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: null,
        isLoading: false,
      },
      routes: {
        coords: [],
        error: null,
        isLoading: false,
        submitted: false,
      },
    });
  });

  it("should work with FETCH_ROUTES_REQUEST", () => {
    expect(
      reducer([], {
        type: "map/routes/REQUEST"
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: null,
        isLoading: false,
      },
      routes: {
        coords: [],
        error: null,
        isLoading: true,
        submitted: false,
      },
    });
  });

  it("should work with FETCH_ROUTES_SUCCESS", () => {
    expect(
      reducer([], {
        type: "map/routes/SUCCESS",
        payload: {coords: "coords"}
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: null,
        isLoading: false,
      },
      routes: {
        coords: {coords: "coords"},
        error: null,
        isLoading: false,
        submitted: true,
      },
    });
  });

  it("should work with FETCH_ROUTES_FAILURE", () => {
    expect(
      reducer([], {
        type: "map/routes/FAILURE",
        payload: "error"
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: null,
        isLoading: false,
      },
      routes: {
        coords: [],
        error: "error",
        isLoading: false,
        submitted: false,
      },
    });
  });

  it("should work with FETCH_ADDRESSES_REQUEST", () => {
    expect(
      reducer([], {
        type: "map/addressList/REQUEST"
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: null,
        isLoading: true,
      },
      routes: {
        coords: [],
        error: null,
        isLoading: false,
        submitted: false,
      },
    });
  });

  it("should work with FETCH_ADDRESSES_SUCCESS", () => {
    expect(
      reducer([], {
        type: "map/addressList/SUCCESS",
        payload: {addresses: "addresses"}
      })
    ).toEqual({
      addresses: {
        addresses: {addresses: "addresses"},
        error: null,
        isLoading: false,
      },
      routes: {
        coords: [],
        error: null,
        isLoading: false,
        submitted: false,
      },
    });
  });

  it("should work with FETCH_ADDRESSES_FAILURE", () => {
    expect(
      reducer([], {
        type: "map/addressList/FAILURE",
        payload: "error"
      })
    ).toEqual({
      addresses: {
        addresses: [],
        error: "error",
        isLoading: false,
      },
      routes: {
        coords: [],
        error: null,
        isLoading: false,
        submitted: false,
      },
    });
  });
});