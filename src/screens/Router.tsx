/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";
import { RootState } from "../store";
import { STATUS } from "../store/utils/status";
import { WelcomeScreen } from "./WelcomeScreen/WelcomeScreen";
import { StoryScreen } from "./StoryScreen/StoryScreen";
import AppBar from "../components/AppBar/AppBar";
import {LoginScreen} from "./Auth/LoginScreen/LoginScreen";
import {GoogleAuthDoneScreen} from "./Auth/GoogleDoneScreen";
import {withTracker} from "../components/withTrackerHOC";

export const Router: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.auth.getTokenAtStartup());
  }, []);

  const { status } = useSelector((state: RootState) => state.auth);

  switch (status) {
    default:
    case STATUS.LOADING:
    case STATUS.FAILURE:
      return (
          <Switch>
              <Route
                  path="/"
                  exact={true}
                  component={withTracker(WelcomeScreen)}
              />
            <Route
                path="/login/"
                exact={true}
                component={withTracker(LoginScreen)}
            />

            <Route
                path="/login/google/done/"
                exact={true}
                render={() => <GoogleAuthDoneScreen method={"login"} />}
            />

            <Route path={"*"} component={withTracker(LoginScreen)} />
          </Switch>
      );
    case STATUS.SUCCESS:
      return (
        <>
          <AppBar />
          <Switch>
            <Route exact path="/" component={WelcomeScreen} />
            <Route exact path="/story" component={StoryScreen} />

            <Route path={"*"}>
              <Redirect to={"/story"} />
            </Route>
          </Switch>
        </>
      );
  }
};
