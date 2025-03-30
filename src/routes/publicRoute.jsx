import { lazy } from "react";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const ViewPage = lazy(() => import("../features/public/pages/ViewPage"));
const Newspage = lazy(() => import("../features/public/pages/Newspage"));

const publicRoute = [
  {
    index: true,
    element: <ViewPage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "view",
    element: <ViewPage />,
  },
  {
    path: `news/:id`,
    element: <Newspage />,
  }
];

export default publicRoute;
