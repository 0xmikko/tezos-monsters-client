/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { isAuthenticated } from "../../store/auth";
import actions from "../../store/actions";
import "./AppBar.css";
import { intWithCommas } from "../../utils/formaters";

// import AppSearch from "./AppSearch"

export const AppBar = () => {
  const isSignIn = useSelector((state: RootState) => isAuthenticated(state));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(actions.auth.logout());

  const { gold, shares } = useSelector((state: RootState) => state.profile);

  return (
    <div style={{ position: "absolute", display: 'flex', width: '100%', zIndex: 1000 }}>
      <Navbar className="navbar-header navbar-header-fixed woodBar">
        <Navbar.Brand>
          <span
            style={{
              fontFamily: "Godzilla",
              color: "#fff",
              marginTop: "-40px",
            }}
          >
            Monsters Factory
          </span>
        </Navbar.Brand>
        <Nav
          style={{ justifyContent: "flex-end", width: "100%", color: "#fff" }}
        >
          <Nav.Item>
            <img
              src={"/images/gold.png"}
              height={30}
              style={{ marginTop: -10, marginRight: 20 }}
            />
            <span
              style={{
                fontFamily: "Godzilla",
                color: "#fff",
                marginTop: "-40px",
                fontSize: 30,
              }}
            >
              {intWithCommas(gold)}
            </span>
            <img
              src={"/images/share.png"}
              height={30}
              style={{ marginTop: -10, marginLeft: 30, marginRight: 20 }}
            />
            <span
              style={{
                fontFamily: "Godzilla",
                color: "#fff",
                marginTop: "-40px",
                fontSize: 30,
              }}
            >
              {shares}
            </span>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppBar;
