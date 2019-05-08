// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';
import type { TwoTonedIcon } from '../flowTypes';
import { boxBlue, white } from '../../styles/variables';

const IconEdit = ({ className = '', height = 24, title, width = 24 }: TwoTonedIcon) => (
    <AccessibleSVG
        className={`bdl-IconEdit ${className}`}
        height={height}
        title={title}
        viewBox="0 0 32 32"
        width={width}
    >
        <circle className="background-color" fill={boxBlue} cx="16" cy="16" r="16" />
        <g className="foreground-color" transform="translate(9.000000, 9.000000)" fill={white}>
            <path d="M2.55318931,8.10044342 L10.0254604,0.698424385 C10.9120573,-0.210024968 12.3753683,-0.235595915 13.2938572,0.641310075 C14.212346,1.51821607 14.2381995,2.96553255 13.3516027,3.87398194 L5.77538968,11.3331153 L2.55318931,8.10044342 Z M1.4329261,9.36838187 L4.70132289,12.6010538 L0.774627105,13.9375294 C0.174073632,14.1431411 -0.13775221,13.8233007 0.0585825795,13.2407344 L1.4329261,9.36838187 Z" />
        </g>
    </AccessibleSVG>
);

export default IconEdit;
