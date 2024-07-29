'use client';

import { useState } from 'react';
import { tss } from 'tss-react/mui';
import Slider from '@mui/material/Slider';
import { css } from '@emotion/css';

export function TssLogo() {
  const [offset, setOffset] = useState(0);

  const { classes } = useStyles({ offset });

  return (
    <div>
      <div
        className={css({
          width: 300,
          height: 300,
          backgroundColor: 'cyan',
          border: '1px solid white',
          position: 'relative',
          // white border on the box

          containerType: 'size',
        })}
      >
        <span className={classes.text}>TSS</span>
      </div>
      <Slider
        className={classes.slider}
        value={offset}
        onChange={(_e, offset) => setOffset(offset as number)}
      />
    </div>
  );
}

const useStyles = tss
  .withNestedSelectors<'text'>()
  .withParams<{ offset: number }>()
  .create(({ classes, theme, offset }) => ({
    square: {
      width: 300,
      height: 300,
      backgroundColor: 'cyan',
      border: '1px solid white',
      position: 'relative',
      // white border on the box
      boxShadow: `0px 0px 20px ${theme.palette.primary.main}}`,

      //containerType: 'size',
      '&': {
        container: 'size',
      },
    },
    text: {
      fontFamily: 'sans-serif',
      display: 'block',
      position: 'absolute',
      bottom: -20,
      right: 0 - offset,
      fontSize: 150,
      fontWeight: 500,
      color: 'white',
      letterSpacing: -10,
      textShadow: `0px 0px 5px ${theme.palette.background.default}`,
      ['@container (width<1000px)']: {
        backgroundColor: 'orange',
      },
    },

    slider: {
      marginTop: theme.spacing(3),
    },
  }));
