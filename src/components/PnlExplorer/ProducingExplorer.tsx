import React from "react";
import styled from "styled-components/macro";
import * as colors from "../../constants/colors";

const ArrowStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  .line {
    margin: auto;
    flex-grow: 1;
    background: ${colors.speedGain};
    height: 8px;
  }
  .point {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    flex-grow: 0;
  }
  .right {
    border-left: 20px solid ${colors.speedGain};
  }
  .left {
    border-right: 20px solid ${colors.speedGain};
  }
`;

const EffectiveSpeedGainArrow = () => (
  <ArrowStyles>
    <div className="line" />
    <div className="point right" />
  </ArrowStyles>
);
const EffectiveSlowLossArrow = () => (
  <ArrowStyles>
    <div className="point left" />
    <div className="line" />
  </ArrowStyles>
);

const ProducingExplorerStyles = styled.div`
  box-sizing: border-box;
  color: ${colors.textOnProducing};
  background: ${colors.producing};
  word-break: break-all;
  div:not(.point):not(.line):not([class*="RowStyles"]):not([class*="ArrowStyles"]):not([class*="ColumnTitleStyles"]) {
    outline: 1px solid black;
  }
  text-align: center;
  [class*="ColumnTitleStyles"] {
    font-weight: bold;
  }
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
// TODO: Show measurable quantities and durations

export interface ProducingExplorerProps {
  producingTime: number;
  runningTime: number;
  minorStopTime: number;
  runningAtRateTime: number;
  runningFastTime: number;
  runningSlowTime: number;
  effectiveRunningTime: number;
  effectiveSlowLossTime: number;
  effectiveSpeedGainTime: number;
  effectiveSlowdownLossTime: number;
  effectiveSpeedLossTime: number;
  effectiveProducingTime: number;
  effectiveQualityLossTime: number;
  effectiveScrapTime: number;
  effectiveReworkTime: number;
}

export default function ProducingExplorer({
  producingTime,
  runningTime,
  minorStopTime,
  runningAtRateTime,
  runningFastTime,
  runningSlowTime,
  effectiveRunningTime,
  effectiveSlowLossTime,
  effectiveSpeedGainTime,
  effectiveSlowdownLossTime,
  effectiveSpeedLossTime,
  effectiveProducingTime,
  effectiveQualityLossTime,
  effectiveScrapTime,
  effectiveReworkTime,
}: ProducingExplorerProps) {
  return (
    <ProducingExplorerStyles style={{ width: `100%` }}>
      <ColumnTitleStyles>Producing</ColumnTitleStyles>
      <RowStyles>
        <RunningStyles
          style={{ width: `${(100 * runningTime) / producingTime}%` }}
        >
          <ColumnTitleStyles>Running</ColumnTitleStyles>
          <RowStyles>
            <RunningAtRateStyles
              style={{ width: `${(100 * runningAtRateTime) / runningTime}%` }}
            >
              Running at Rate
            </RunningAtRateStyles>
            <RunningFastStyles
              style={{ width: `${(100 * runningFastTime) / runningTime}%` }}
            >
              Running Fast
            </RunningFastStyles>
            <RunningSlowStyles
              style={{ width: `${(100 * runningSlowTime) / runningTime}%` }}
            >
              Running Slow
            </RunningSlowStyles>
          </RowStyles>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
                width: `${
                  (100 *
                    Math.max(effectiveSpeedGainTime, effectiveSlowLossTime)) /
                  runningTime
                }%`,
              }}
            >
              <div
                style={{
                  width: `${
                    (100 * effectiveSpeedGainTime) /
                    Math.max(effectiveSpeedGainTime, effectiveSlowLossTime)
                  }%`,
                }}
              >
                <ColumnTitleStyles>Effective Speed Gain Time</ColumnTitleStyles>
                <EffectiveSpeedGainArrow />
              </div>
              <div
                style={{
                  width: `${
                    (100 * effectiveSlowLossTime) /
                    Math.max(effectiveSpeedGainTime, effectiveSlowLossTime)
                  }%`,
                }}
              >
                <EffectiveSlowLossArrow />
                <ColumnTitleStyles>Effective Slow Loss Time</ColumnTitleStyles>
              </div>
            </div>

            <RowStyles>
              <RunningAtRateStyles
                style={{
                  width: `${(100 * effectiveRunningTime) / runningTime}%`,
                }}
              >
                Effective Running Time
              </RunningAtRateStyles>
              <RunningSlowStyles
                style={{
                  width: `${(100 * effectiveSlowdownLossTime) / runningTime}%`,
                }}
              >
                <div style={{ height: "120px" }}>
                  Effective Slowdown Loss Time
                </div>
              </RunningSlowStyles>

              {/* <RunningSlowStyles style={{ width: `${100 * effectiveSlowLossTime / runningTime}%` }}>
                <ColumnTitleStyles>Effective Slow Loss Time</ColumnTitleStyles>
                <RowStyles>
                  <SpeedGainStyles style={{ width: `${100 * effectiveSpeedGainTime / effectiveSlowLossTime}%` }}>
                    <ColumnTitleStyles>
                      Effective Speed Gain Time
                    </ColumnTitleStyles>
                    <RunningAtRateStyles style={{ flexGrow: 1 }} />
                  </SpeedGainStyles>
                  <RunningSlowStyles style={{ width: `${100 * effectiveSlowdownLossTime / effectiveSlowLossTime}%` }}>
                    <div style={{ height: '80px' }}>
                      Effective Slowdown Loss Time
                    </div>
                  </RunningSlowStyles>
                </RowStyles>
              </RunningSlowStyles> */}
            </RowStyles>
          </div>
        </RunningStyles>
        <MinorStopStyles
          style={{ width: `${(100 * minorStopTime) / producingTime}%` }}
        >
          Minor Stop
        </MinorStopStyles>
      </RowStyles>

      <RowStyles>
        <RunningAtRateStyles
          style={{
            width: `${(100 * effectiveProducingTime) / producingTime}%`,
          }}
        >
          Effective Producing Time
        </RunningAtRateStyles>
        <QualityLossStyles
          style={{
            width: `${(100 * effectiveQualityLossTime) / producingTime}%`,
          }}
        >
          <ColumnTitleStyles>Effective Quality Loss Time</ColumnTitleStyles>
          <RowStyles>
            <QualityLossStyles
              style={{
                width: `${
                  (100 * effectiveScrapTime) / effectiveQualityLossTime
                }%`,
              }}
            >
              Effective Scrap Time
            </QualityLossStyles>
            <QualityLossStyles
              style={{
                width: `${
                  (100 * effectiveReworkTime) / effectiveQualityLossTime
                }%`,
              }}
            >
              Effective Rework Time
            </QualityLossStyles>
          </RowStyles>
        </QualityLossStyles>
        <RunningSlowStyles
          style={{
            width: `${(100 * effectiveSpeedLossTime) / producingTime}%`,
          }}
        >
          Effective Speed Loss
        </RunningSlowStyles>
      </RowStyles>
    </ProducingExplorerStyles>
  );
}
