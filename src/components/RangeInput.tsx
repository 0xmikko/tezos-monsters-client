/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Form, Col, Row } from "react-bootstrap";

interface RangeInputProps {
  value: number;
  part: string;
  item: string;
  update: (key: string, variable: string, value: number) => void;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  value,
  part,
  item,
  update,
}) => (
  <Form.Group controlId="formBasicRange" style={{ marginBottom: "4px" }}>
    <Row>
      <Col xl={3} lg={3} md={3}>
        <Form.Label>{item}: {value}</Form.Label>
      </Col>
      <Col>
        <Form.Control
          type="range"
          value={value}
          onChange={(e) => update(part, item, parseInt(e.currentTarget.value))}
        />
      </Col>{" "}
    </Row>
  </Form.Group>
);
