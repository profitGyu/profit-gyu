import ErrorBoundary from "@components/common/ErrorBoundary";
import Resume from "@pages/resume";

import { createBrowserRouter } from "react-router";

export const ROUTES = {
  RESUME: '/',
}

export const browserRouter = createBrowserRouter([
  {
    errorElement: <ErrorBoundary><div>페이지를 찾을 수 없습니다</div></ErrorBoundary>,
    children: [
      {
        path: ROUTES.RESUME,
        element: <Resume />
      },
    ]
  }
]);

