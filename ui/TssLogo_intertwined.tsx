"use client";

// This is the same component That TssLogo.tsx but 
// with the css intertwined with the JSX.

import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useStyles } from "tss-react/mui";

export function TssLogo() {
    const [offset, setOffset] = useState(0);

    const { css, theme } = useStyles();

    return (
        <div>
            <div className={css({
                width: 400,
                height: 400,
                backgroundColor: theme.palette.primary.main,
                border: '1px solid white',
                position: 'relative',
                // white border on the box
                boxShadow: `0px 0px 20px ${theme.palette.primary.main}}`,
            })}>
                <span className={css({
                    fontFamily: 'sans-serif',
                    display: 'block',
                    position: 'absolute',
                    bottom: -20,
                    right: 0 - offset,
                    fontSize: 200,
                    fontWeight: 500,
                    color: 'white',
                    letterSpacing: -10,
                    textShadow: `0px 0px 5px ${theme.palette.background.default}`,
                })}
                >
                    TSS
                </span>
            </div>
            <Slider
                className={css({
                    marginTop: theme.spacing(3)
                })}
                value={offset}
                onChange={(_e, offset) => setOffset(offset as number)}
            />
        </div>
    );
}
