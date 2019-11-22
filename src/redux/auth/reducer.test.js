import reducer from "./reducer";

describe("auth reducer", () => {
  it("should work with LOGIN_VERIFICATION", () => {
    expect(
      reducer([], {
        type: "auth/login/VERIFICATION"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false
      }
    });
  });

  it("should work with LOGIN_REQUEST", () => {
    expect(
      reducer([], {
        type: "auth/login/REQUEST"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: true,
        isLoggedIn: false,
        token: null
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false
      }
    });
  });

  it("should work with LOGIN_SUCCESS", () => {
    expect(
      reducer([], {
        type: "auth/login/SUCCESS",
        payload: "token"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: true,
        token: "token"
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false
      }
    });
  });

  it("should work with LOGIN_FAILURE", () => {
    expect(
      reducer([], {
        type: "auth/login/FAILURE",
        payload: "error"
      })
    ).toEqual({
      login: {
        error: "error",
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false
      }
    });
  });

  it("should work with LOGIN_LOGOUT", () => {
    expect(
      reducer([], {
        type: "auth/login/LOGOUT"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false
      }
    });
  });

  it("should work with REGISTER_INIT", () => {
    expect(
      reducer([], {
        type: "auth/register/INIT"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        error: null,
        isLoading: false,
        submitted: false,
      }
    });
  });

  it("should work with REGISTER_REQUEST", () => {
    expect(
      reducer([], {
        type: "auth/register/REQUEST"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        isLoading: true,
        error: null,
        submitted: false,
      }
    });
  });

  it("should work with REGISTER_SUCCESS", () => {
    expect(
      reducer([], {
        type: "auth/register/SUCCESS",
        payload: "token"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        isLoading: false,
        error: null,
        submitted: true
      }
    });
  });

  it("should work with REGISTER_FAILURE", () => {
    expect(
      reducer([], {
        type: "auth/register/FAILURE",
        payload: "error"
      })
    ).toEqual({
      login: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        token: null
      },
      register: {
        isLoading: false,
        error: "error",
        submitted: false,
      }
    });
  });
});