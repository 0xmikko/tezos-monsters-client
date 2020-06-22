/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from 'react';
import { Button } from 'react-bootstrap';

export interface MagicButtonProps {
    title: string;
    onClick?: () => void;
}

export const MagicButton : React.FC<MagicButtonProps> = ({title, onClick}) => {
    return <Button onClick={onClick} style={style}>{title}</Button>
}

const style = {
    marginTop: '10px',
    marginBottom: '10px',
    width: '80%',
    backgroundColor: '#6f1b1b',
    fontFamily: 'SansSerif',
    fontSize: '20px',
    border: '1px solid black',

}
