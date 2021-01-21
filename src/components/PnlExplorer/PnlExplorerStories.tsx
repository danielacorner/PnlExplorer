import React from "react";
import PnlExplorer from "./PnlExplorer";
import ProducingExplorer, { ProducingExplorerProps } from "./ProducingExplorer";
import styled from "styled-components/macro";

const ONE_HOUR_OF_MS = 60 * 60 * 1000;

const producingExplorerProps: ProducingExplorerProps = {
  producingTime: 10 * ONE_HOUR_OF_MS,
  runningTime: 7 * ONE_HOUR_OF_MS,
  minorStopTime: 3 * ONE_HOUR_OF_MS,
  runningAtRateTime: 3 * ONE_HOUR_OF_MS,
  runningFastTime: 2 * ONE_HOUR_OF_MS,
  runningSlowTime: 2 * ONE_HOUR_OF_MS,
  effectiveRunningTime: 4 * ONE_HOUR_OF_MS,
  effectiveSlowLossTime: 5.25 * ONE_HOUR_OF_MS,
  effectiveSpeedGainTime: 2.25 * ONE_HOUR_OF_MS,
  effectiveSlowdownLossTime: 3 * ONE_HOUR_OF_MS,
  effectiveSpeedLossTime: 6 * ONE_HOUR_OF_MS,
  effectiveProducingTime: 2 * ONE_HOUR_OF_MS,
  effectiveQualityLossTime: 2 * ONE_HOUR_OF_MS,
  effectiveScrapTime: 1 * ONE_HOUR_OF_MS,
  effectiveReworkTime: 1 * ONE_HOUR_OF_MS,
};
const StoryStyles = styled.div`
  width: 95%;
  margin: auto;
`;
export default function PnlExplorerStories() {
  return (
    <StoryStyles>
      <h1>P&L Explorer</h1>
      <PnlExplorer />
      <h1>Producing Explorer</h1>
      <ProducingExplorer {...producingExplorerProps} />
    </StoryStyles>
  );
}
