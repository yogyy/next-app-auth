// import { NextRequest } from "next/server";
// import { updateSession } from "./lib";

// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// } // use this is not using next-auth

export { auth as default } from "./auth";

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
