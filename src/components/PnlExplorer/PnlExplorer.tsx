import React from "react";
import styled from "styled-components/macro";
import * as colors from "../../constants/colors";

const PnlExplorerStyles = styled.div`
  word-break: break-all;
  div:not([class*="RowStyles"]):not([class*="ColumnTitleStyles"]) {
    outline: 1px solid black;
  }
  text-align: center;
  [class*="ColumnTitleStyles"] {
    font-weight: bold;
  }
`;

const CalendarStyles = styled.div`
  color: ${colors.darkGrey};
  background: ${colors.lighterGrey};
  outline: solid 1px #ffffff;
`;
const ProductionStyles = styled.div`
  color: ${colors.darkGrey};
  background: ${colors.lighterGrey};
`;
const ProducingStyles = styled.div`
  color: ${colors.textOnProducing};
  background: ${colors.producing};
`;
const DowntimeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${colors.darkGrey};
  background: ${colors.lighterGrey};
`;
const PlannedStyles = styled.div`
  color: ${colors.textOnPlanned};
  background: ${colors.planned};
`;
const WaitingStyles = styled.div`
  color: ${colors.textOnWaiting};
  background: ${colors.waiting};
`;
const UnplannedStyles = styled.div`
  color: ${colors.textOnUnplanned};
  background: ${colors.unplanned};
`;
const UnknownStyles = styled.div`
  color: ${colors.textOnUntagged};
  background: ${colors.untagged};
`;
const NotScheduledStyles = styled.div`
  color: ${colors.textOnNotScheduled};
  background: ${colors.notScheduled};
`;
const RunningStyles = styled.div`
  color: ${colors.textOnProducing};
  background: ${colors.producing};
`;
const MinorStopStyles = styled.div`
  color: ${colors.textOnSpeedLoss};
  background: ${colors.speedLoss};
`;
const RunningAtRateStyles = styled.div`
  color: ${colors.textOnProducing};
  background: ${colors.producing};
`;
const RunningFastStyles = styled.div`
  color: ${colors.textOnSpeedGain};
  background: ${colors.speedGain};
`;
const RunningSlowStyles = styled.div`
  color: ${colors.textOnSpeedLoss};
  background: ${colors.speedLoss};
`;
const SpeedGainStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${colors.textOnSpeedGain};
  background: ${colors.speedGain};
`;
const QualityLossStyles = styled.div`
  color: ${colors.darkGrey};
  background: ${colors.medGrey};
`;
const ColumnTitleStyles = styled.div`
  flex-grow: 0;
`;
const RowStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
`;

// TODO: Show states vs effective vs whatever else
// TODO: Show measurable quantities

export default function PnlExplorer() {
  const calendarWidth = 100;
  const collectableWidth = 93;
  const uncollectableWidth = calendarWidth - collectableWidth;
  const collectedWidth = 93;
  const uncollectedWidth = 100 - collectedWidth;
  const notScheduledWidth = 8;
  const producingWidth = 55;
  const plannedWidth = 45;
  const waitingWidth = 25;
  const unplannedWidth = 15;
  const unknownWidth = 15;
  const downtimeWidth = 100 - producingWidth - notScheduledWidth;
  const runningWidth = 65;
  const minorStopWidth = 100 - runningWidth;
  const runningAtRateWidth = 35;
  const runningFastWidth = 25;
  const runningSlowWidth = 100 - runningAtRateWidth - runningFastWidth;
  const effectiveRunningTimeWidth = 40;
  const slowLossTimeWidth = 100 - effectiveRunningTimeWidth;
  const speedGainTimeWidth = 45;
  const slowdownLossTimeWidth = 100 - speedGainTimeWidth;

  const speedLossTimeWidth =
    minorStopWidth +
    slowdownLossTimeWidth * (0.01 * runningWidth) * (0.01 * slowLossTimeWidth);
  const effectiveProducingTimeWidth = 20;
  const effectiveQualityLossTimeWidth =
    100 - effectiveProducingTimeWidth - speedLossTimeWidth;

  const effectiveScrapTimeWidth = 50;
  const effectiveReworkTimeWidth = 100 - effectiveScrapTimeWidth;

  return (
    <PnlExplorerStyles>
      <CalendarStyles style={{ width: `${calendarWidth}%` }}>
        Calendar
        <RowStyles>
          <CalendarStyles style={{ width: `${collectableWidth}%` }}>
            <ColumnTitleStyles>Collectable</ColumnTitleStyles>
            <RowStyles>
              <CalendarStyles style={{ width: `${collectableWidth}%` }}>
                <ColumnTitleStyles>Collected</ColumnTitleStyles>
                <RowStyles>
                  <ProductionStyles
                    style={{ width: `${producingWidth + downtimeWidth}%` }}
                  >
                    <ColumnTitleStyles>Production</ColumnTitleStyles>
                  </ProductionStyles>
                </RowStyles>
                <RowStyles>
                  <ProducingStyles style={{ width: `${producingWidth}%` }}>
                    <ColumnTitleStyles>Producing</ColumnTitleStyles>

                    <RowStyles>
                      <RunningStyles style={{ width: `${runningWidth}%` }}>
                        <ColumnTitleStyles>Running</ColumnTitleStyles>
                        <RowStyles>
                          <RunningAtRateStyles
                            style={{ width: `${runningAtRateWidth}%` }}
                          >
                            Running at Rate
                          </RunningAtRateStyles>
                          <RunningFastStyles
                            style={{ width: `${runningFastWidth}%` }}
                          >
                            Running Fast
                          </RunningFastStyles>
                          <RunningSlowStyles
                            style={{ width: `${runningSlowWidth}%` }}
                          >
                            Running Slow
                          </RunningSlowStyles>
                        </RowStyles>
                        <RowStyles>
                          <RunningAtRateStyles
                            style={{ width: `${effectiveRunningTimeWidth}%` }}
                          >
                            Effective Running Time
                          </RunningAtRateStyles>
                          <RunningSlowStyles
                            style={{ width: `${slowLossTimeWidth}%` }}
                          >
                            <ColumnTitleStyles>
                              Slow Loss Time
                            </ColumnTitleStyles>
                            <RowStyles>
                              <SpeedGainStyles
                                style={{ width: `${speedGainTimeWidth}%` }}
                              >
                                Speed Gain Time
                              </SpeedGainStyles>
                              <RunningSlowStyles
                                style={{ width: `${slowdownLossTimeWidth}%` }}
                              >
                                Slowdown Loss Time
                              </RunningSlowStyles>
                            </RowStyles>
                          </RunningSlowStyles>
                          {/* <RunningFastStyles style={{ width: `${speedGainTimeWidth}%` }}>Speed Gain Time</RunningFastStyles>
                          <RunningSlowStyles style={{ width: `${slowLossTimeWidth}%` }}>Slow Loss Time</RunningSlowStyles> */}
                        </RowStyles>
                      </RunningStyles>
                      <MinorStopStyles style={{ width: `${minorStopWidth}%` }}>
                        Minor Stop
                      </MinorStopStyles>
                    </RowStyles>

                    <RowStyles>
                      <RunningAtRateStyles
                        style={{ width: `${effectiveProducingTimeWidth}%` }}
                      >
                        Effective Producing Time
                      </RunningAtRateStyles>
                      <QualityLossStyles
                        style={{ width: `${effectiveQualityLossTimeWidth}%` }}
                      >
                        <ColumnTitleStyles>
                          Effective Quality Loss Time
                        </ColumnTitleStyles>
                        <RowStyles>
                          <QualityLossStyles
                            style={{ width: `${effectiveScrapTimeWidth}%` }}
                          >
                            Effective Scrap Time
                          </QualityLossStyles>
                          <QualityLossStyles
                            style={{ width: `${effectiveReworkTimeWidth}%` }}
                          >
                            Effective Rework Time
                          </QualityLossStyles>
                        </RowStyles>
                      </QualityLossStyles>
                      <RunningSlowStyles
                        style={{ width: `${speedLossTimeWidth}%` }}
                      >
                        Effective Speed Loss
                      </RunningSlowStyles>
                    </RowStyles>
                  </ProducingStyles>
                  <DowntimeStyles style={{ width: `${downtimeWidth}%` }}>
                    <ColumnTitleStyles>Downtime</ColumnTitleStyles>
                    <RowStyles>
                      <PlannedStyles style={{ width: `${plannedWidth}%` }}>
                        Planned
                      </PlannedStyles>
                      <WaitingStyles style={{ width: `${waitingWidth}%` }}>
                        Waiting
                      </WaitingStyles>
                      <UnplannedStyles style={{ width: `${unplannedWidth}%` }}>
                        Unplanned
                      </UnplannedStyles>
                      <UnknownStyles style={{ width: `${unknownWidth}%` }}>
                        Unknown
                      </UnknownStyles>
                    </RowStyles>
                  </DowntimeStyles>
                  <NotScheduledStyles
                    style={{ width: `${notScheduledWidth}%` }}
                  >
                    Not Scheduled
                  </NotScheduledStyles>
                </RowStyles>
              </CalendarStyles>
              <CalendarStyles style={{ width: `${uncollectedWidth}%` }}>
                Uncollected
              </CalendarStyles>
            </RowStyles>
          </CalendarStyles>
          <CalendarStyles style={{ width: `${uncollectableWidth}%` }}>
            Uncollectable
          </CalendarStyles>
        </RowStyles>
      </CalendarStyles>
    </PnlExplorerStyles>
  );
}
