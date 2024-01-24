import React from "react";
import { Route, Routes } from "react-router-dom";
import "./const";

import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
} from "./const";

import {
  PracticeEight,
  PracticeFive,
  PracticeFour,
  PracticeNine,
  PracticeOne,
  PracticeSeven,
  PracticeSix,
  PracticeTen,
  PracticeThree,
  PracticeTwo,
} from "../pages/practice/pages";

import {
  PresentationFive,
  PresentationFour,
  PresentationOne,
  PresentationThree,
  PresentationTwo,
} from "../pages/presentation/pages";
import {
  About,
  Author,
  ErrorPage,
  HomePage,
  Practice,
  Presentation,
  Tests,
} from "../pages";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<PresentationOne />} />
          <Route path="2" element={<PresentationTwo />} />
          <Route path="3" element={<PresentationThree />} />
          <Route path="4" element={<PresentationFour />} />
          <Route path="5" element={<PresentationFive />} />
        </Route>
        <Route path={PRACTICE_PAGE}>
          <Route path="" element={<Practice />} />
          <Route path="1" element={<PracticeOne />} />
          <Route path="2" element={<PracticeTwo />} />
          <Route path="3" element={<PracticeThree />} />
          <Route path="4" element={<PracticeFour />} />
          <Route path="5" element={<PracticeFive />} />
          <Route path="6" element={<PracticeSix />} />
          <Route path="7" element={<PracticeSeven />} />
          <Route path="8" element={<PracticeEight />} />
          <Route path="9" element={<PracticeNine />} />
          <Route path="10" element={<PracticeTen />} />
        </Route>
        <Route path={TEST_PAGE} element={<Tests />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default router;
