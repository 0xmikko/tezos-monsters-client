/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {MagicButton} from "../../components/Button/MagicButton";
import {ThroughFade} from "../../components/ThroughFadeEffect/ThroughFade";
import "./BookView.css";

interface CodePageProps {
    title: string
    image: string

}
export const CodePage : React.FC<CodePageProps> = ({
                                                       image, title
                                                   }) => {
    return <ThroughFade>
        <Container fluid>
            <Row>
                <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                    className={"page1"}
                >
                    {/* { leftImage } */}
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className={"page2"}>
                    <h2>{title}</h2>
                    <p> It was</p>
                    <p>Your assets:</p>
                    <p>- No money</p>
                    <p>- A dream to kiss a Queen</p>
                    <p>- A lot of energy</p>

                    <MagicButton title="Become a Tezos developer & earn millions" />
                    <br />
                    <MagicButton title="Go to boring job" />
                </Col>
            </Row>
        </Container>
    </ThroughFade>
}
