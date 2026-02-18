import { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, PieChart, LineChart, RadarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, RadarComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([BarChart, PieChart, LineChart, RadarChart, GridComponent, TooltipComponent, LegendComponent, RadarComponent, CanvasRenderer]);

export function useECharts(option: echarts.EChartsCoreOption) {
  const ref = useRef<HTMLDivElement>(null);
  const inst = useRef<echarts.ECharts>(null);

  useEffect(() => {
    if (!ref.current) return;
    inst.current = echarts.init(ref.current);
    inst.current.setOption(option);
    const onResize = () => inst.current?.resize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      inst.current?.dispose();
    };
  }, [option]);

  return ref;
}
