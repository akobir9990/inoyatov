import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";
import Presentation from "../pages/presentation";
import Practice from "../pages/practice";
import Tutorial from "../pages/tutorial";
import TestAPage from "../pages/tests";
import Error from "../pages/errorPage";
import One from "../pages/presentation/pages/one";
import Two from "../pages/presentation/pages/two";
import Three from "../pages/presentation/pages/three";
import Four from "../pages/presentation/pages/four";
import Five from "../pages/presentation/pages/five";

import TutorialOne from "../pages/tutorial/pages/one";
import TutorialTwo from "../pages/tutorial/pages/two/index";
import TutorialThree from "../pages/tutorial/pages/three";
import TutorialFour from "../pages/tutorial/pages/four";
import TutorialFive from "../pages/tutorial/pages/five";
import TutorialSix from "../pages/tutorial/pages/six";
import TutorialSeven from "../pages/tutorial/pages/seven";
import TutorialEight from "../pages/tutorial/pages/eight";
import TutorialNine from "../pages/tutorial/pages/nine";
import TutorialTen from "../pages/tutorial/pages/ten";
import TutorialEleven from "../pages/tutorial/pages/eleven";
import TutorialTwelve from "../pages/tutorial/pages/twelve";
import TutorialThirteen from "../pages/tutorial/pages/thirteen";
import TutorialContent from "../pages/tutorial/pages/content";
import TutorialGlossaries from "../pages/tutorial/pages/glossaries";
import TutorialLibrary from "../pages/tutorial/pages/library";

import PracticeOne from "../pages/practice/pages/one";
import PracticeTwo from "../pages/practice/pages/two";
import PracticeThree from "../pages/practice/pages/three";
import PracticeFour from "../pages/practice/pages/four";
import PracticeFive from "../pages/practice/pages/five";
import PracticeSix from "../pages/practice/pages/six";
import PracticeSeven from "../pages/practice/pages/seven";
import PracticeEight from "../pages/practice/pages/eight";
import PracticeNine from "../pages/practice/pages/nine";
import PracticeTen from "../pages/practice/pages/ten";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={TUTORIAL_PAGE}>
          <Route path="" element={<Tutorial />} />
          <Route path="1" element={<TutorialOne />} />
          <Route path="2" element={<TutorialTwo />} />
          <Route path="3" element={<TutorialThree />} />
          <Route path="4" element={<TutorialFour />} />
          <Route path="5" element={<TutorialFive />} />
          <Route path="6" element={<TutorialSix />} />
          <Route path="7" element={<TutorialSeven />} />
          <Route path="8" element={<TutorialEight />} />
          <Route path="9" element={<TutorialNine />} />
          <Route path="10" element={<TutorialTen />} />
          <Route path="11" element={<TutorialEleven />} />
          <Route path="12" element={<TutorialTwelve />} />
          <Route path="13" element={<TutorialThirteen />} />
          <Route path="14" element={<TutorialContent />} />
          <Route path="15" element={<TutorialGlossaries />} />
          <Route path="16" element={<TutorialLibrary />} />
        </Route>

        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<One />} />
          <Route path="2" element={<Two />} />
          <Route path="3" element={<Three />} />
          <Route path="4" element={<Four />} />
          <Route path="5" element={<Five />} />
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
        <Route path={TEST_PAGE} element={<TestAPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default router;
