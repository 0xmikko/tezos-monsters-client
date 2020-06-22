/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from 'react';
import {Link} from 'react-router-dom';

interface AppBarElementProps {
  title: string;
  to: string;
}

export const AppBarElement: React.FC<AppBarElementProps> = ({
  title,
  to,
}: AppBarElementProps) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        <i data-feather="archive" /> {title}
      </Link>
    </li>
  );
};
