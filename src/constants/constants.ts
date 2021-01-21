import {
  producing,
  waiting,
  planned,
  unplanned,
  untagged,
  speedLoss,
  speedGain,
  uncollected
} from './colors';
import { useEffect, useRef } from 'react';

export const FLIGHT_PROD_URL = 'https://flight.raven.ai';
export const FLIGHT_DEV_URL = 'https://fledge.raven.ai';

// Sentry.io
export const sentryDsn =
  'https://25f4de0993b042f1ba159811cd3aa595@sentry.io/1197934';

export const noop = () => null;
export const useMount = fn => {
  useEffect(fn, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const usePrevious = value => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

export const METRIC_LABELS = {
  TEEP: 'teep',
  AVAIL: 'avail',
  UPTIME: 'uptime'
};

export const BOX_SHADOW_TOOLTIP = `4px 7px 6px 0px rgba(0, 0, 0, 0.14), -2px 5px 10px 3px rgba(0, 0, 0, 0.04), 3px -3px 12px 6px rgba(0, 0, 0, 0.05)`;

export const Z_INDEX = {
  L10: 10,
  L9: 9,
  L8: 8,
  L7: 7,
  L6: 6,
  L5: 5,
  L4: 4,
  L3: 3,
  L2: 2,
  L1: 1
};

export const NEW_LINE_CHARACTERS = /\r\n|\r|\n/;

export const LOADING_INTERVAL = 1000;

export const RANGESELECTOR_WIDTH_MOBILE = 247;
export const RANGESELECTOR_WIDTH_TABLET = 362;

export const TILE_WIDTH_STRING = '6.7em';
export const GRID_GAP = 10;
export const NAV_HEIGHT = '2.65em';
export const NAV_HEIGHT_PX = 64;
export const repeatAutoFit = (repeatWidth: string) =>
  `repeat(auto-fit, ${repeatWidth})`;

// Timeline Constants
export const LEFT_PADDING = 30;
export const TIMEAXIS_LEFT_PADDING = 10;
export const TIMEAXIS_RIGHT_PADDING = 0;
export const ROW_HEIGHT = 40;
export const SELECTED_SEGMENT_BORDER_WIDTH = 3;
// export const CELL_WIDTH = 70;
export const ROW_PADDING = 2;
export const COLUMN_PADDING = 0;
export const TOP_PADDING = 10;
export const TOP_PADDING_FOCUS = 32;
export const MODAL_WIDTH = 310;
export const MODAL_HEIGHT = 115;
export const MODAL_ARROW_HEIGHT = 18;
export const MODAL_PADDING = 8;
export const TICK_FONT_SIZE = 13;
// modal arrow is rotated 45deg -- a^2 + b^2 = c^2
export const MODAL_ARROW_OFFSET_LEFT =
  Math.pow(2 * Math.pow(MODAL_ARROW_HEIGHT, 2), 0.5) + MODAL_PADDING;

export const FONT_SIZE_EXTRA_SMALL = 12;
export const FONT_SIZE_SMALL = 18;
export const FONT_SIZE_MEDIUM = 24;
export const FONT_SIZE_LARGE = 30;
export const FONT_SIZE_EXTRA_LARGE = 40;

export const BREAKPOINT_MOBILE = 480;
export const BREAKPOINT_MOBLET = 600;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_TABTOP = 1024;
export const BREAKPOINT_DESKTOP = 1200;

// TODO: Constants below seem specific to a component, move to component?
export const GROUP_METRICS_VERTICAL_PADDING = 10;

export const MACHINES_COLUMN_FONT_SIZE = 9;
export const MACHINES_COLUMN_WIDTH_MOBILE = 70;
export const MACHINES_COLUMN_WIDTH_TABLET = 100;
export const METRICS_COLUMN_WIDTH = 55;
export const METRICS_COLUMN_WIDTH_MOBILE = 60;
export const METRICS_COLUMN_WIDTH_TABLET = 90;

export const METRICDIV_PADDING_VERTICAL = 14;

export const CURRENT_SHIFT_WIDTH = 165;

export const LOGO_HEIGHT = 56;
export const LOGO_WIDTH = 125;

export const BUTTERFLY_METRIC_TITLE_WIDTH = 90;
export const BABY_BUTTERFLY_MARGIN = 30;

export const SHINY_ANIMATED = `
  &:after {
      content: "";
      top: 0;
      transform: translateX(100%);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      animation: slide 1s infinite 3s;
      /* CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ */
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* FF3.6+ */
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0%, rgba(255, 255, 255, 0)),
        color-stop(50%, rgba(255, 255, 255, 0.8)),
        color-stop(99%, rgba(128, 186, 232, 0)),
        color-stop(100%, rgba(125, 185, 232, 0))
      ); /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* Opera 11.10+ */
      background: -ms-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* IE10+ */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
    }`;

export const PNL_CATEGORIES_TO_COLORS_MAP = {
  producing: producing,
  waiting: waiting,
  unplanned: unplanned,
  planned: planned,
  productionLoss: speedLoss,
  notScheduled: speedLoss,
  qualityLoss: speedLoss,
  speedGain: speedGain,
  speedLoss: speedLoss,
  unknown: untagged,
  uncollected: uncollected
};

export const PAGE_WIDTH_FOR_PRINT_PCI = 1700;
export const RECHARTS_PRINT_WIDTH = 1200;
