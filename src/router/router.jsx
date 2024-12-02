import React from "react";
import { Route, Routes } from "react-router-dom";
import "./const";

import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  TASKS_PAGE,
  PRESENTATION_PAGE,
  METHOD_PAGE,
  TEST_PAGE,
  LABORATORY_PAGE,
} from "./const";

import {
  TaskOne,
  TaskTwo,
  TaskThree,
  TaskFour,
  TaskFive,
  TaskSix,
  TaskSeven,
  TaskEight,
  TaskNine,
  TaskTen,
  TaskEleve,
  TaskTvelwe,
} from "../pages/task/pages";

import {
  PresentationEight,
  PresentationFive,
  PresentationFour,
  PresentationNine,
  PresentationOne,
  PresentationSeven,
  PresentationSix,
  PresentationTen,
  PresentationThree,
  PresentationTwo,
} from "../pages/presentation/pages";
import {
  About,
  Author,
  ErrorPage,
  HomePage,
  TaskPage,
  Presentation,
  Tests,
  Method,
  Laboratory,
} from "../pages";
import { MethodOne } from "../pages/methodics/pages";
import { LaboratoryOne } from "../pages/laboratory/pages";

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
          <Route path="6" element={<PresentationSix />} />
          <Route path="7" element={<PresentationSeven />} />
          <Route path="8" element={<PresentationEight />} />
          <Route path="9" element={<PresentationNine />} />
          <Route path="10" element={<PresentationTen />} />
        </Route>
        <Route path={TASKS_PAGE}>
          <Route path="" element={<TaskPage />} />
          <Route path="1" element={<TaskOne />} />
          <Route path="2" element={<TaskTwo />} />
          <Route path="3" element={<TaskThree />} />
          <Route path="4" element={<TaskFour />} />
          <Route path="5" element={<TaskFive />} />
          <Route path="6" element={<TaskSix />} />
          <Route path="7" element={<TaskSeven />} />
          <Route path="8" element={<TaskEight />} />
          <Route path="9" element={<TaskNine />} />
          <Route path="10" element={<TaskTen />} />
          <Route path="11" element={<TaskEleve />} />
          <Route path="12" element={<TaskTvelwe />} />
        </Route>
        <Route path={LABORATORY_PAGE}>
          <Route path="" element={<Laboratory />} />
          <Route path="1" element={<LaboratoryOne />} />
        </Route>
        <Route path={METHOD_PAGE}>
          <Route path="" element={<Method />} />
          <Route path="1" element={<MethodOne />} />
        </Route>
        <Route path={TEST_PAGE} element={<Tests />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default router;
