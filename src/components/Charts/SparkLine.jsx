import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../context/ContexProvider';
/* import { useStateContext } from '../../context/ContextProvider'; */

const SparkLine = ({ id, data, type, color, width, height }) => {
  console.log(`🇸🇱%cSparkLine.jsx:7 - data`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME
  console.log(data); // DELETEME
  const { currentColor } = useStateContext();

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
          fill: currentColor,
        },
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    >
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  );
};

export default SparkLine;
