// an array of routes that are accessible to the public
//this routes do not require authentication
export const publicRoutes = ["/", "/auth/new-verification"];

//These routes will redirect logged in users to /settings
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

export const apiAuthPrefix = "/api/auth";
export const DEFAULT_LOGIN_REDIRECT = "/settings";
