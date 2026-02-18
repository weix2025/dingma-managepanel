import { useMemo } from 'react';
import { useECharts } from '@/hooks/useECharts';
import Tabs from '@/components/ui/Tabs';
import './page.css';

const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

function Chart({ option, tall }: { option: any; tall?: boolean }) {
  const ref = useECharts(option);
  return <div ref={ref} className={`chart-box${tall ? ' tall' : ''}`} />;
}

const barOption = {
  tooltip: { trigger: 'axis' },
  legend: { data: ['2023','2024','2025'], textStyle: { color: '#9898a6', fontSize: 11 } },
  grid: { left: 40, right: 16, top: 36, bottom: 24 },
  xAxis: { type: 'category', data: months, axisLabel: { color: '#6a6a78' }, axisLine: { lineStyle: { color: '#2a2a35' } } },
  yAxis: { type: 'value', max: 350, axisLabel: { color: '#6a6a78' }, splitLine: { lineStyle: { color: '#2a2a35' } } },
  series: [
    { name: '2023', type: 'bar', data: [120,90,150,80,200,170,130,160,140,180,110,95], itemStyle: { color: '#3b82f6' } },
    { name: '2024', type: 'bar', data: [140,110,180,100,220,190,150,180,160,200,130,115], itemStyle: { color: '#06b6d4' } },
    { name: '2025', type: 'bar', data: [180,150,210,130,280,230,190,220,200,250,170,145], itemStyle: { color: '#22c55e' } },
  ],
};

function makePie(title: string, data: { name: string; value: number; color: string }[]) {
  return {
    tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: '#9898a6', fontSize: 11 } },
    series: [{ type: 'pie', radius: ['45%','70%'], center: ['35%','50%'], label: { show: false },
      data: data.map(d => ({ ...d, itemStyle: { color: d.color } })),
    }],
  };
}

const lineMonths = Array.from({ length: 22 }, (_, i) => {
  const y = 2024 + Math.floor(i / 12);
  const m = String((i % 12) + 1).padStart(2, '0');
  return `${y}-${m}`;
});

function makeLine(data: number[]) {
  return {
    tooltip: { trigger: 'axis' },
    grid: { left: 40, right: 16, top: 16, bottom: 24 },
    xAxis: { type: 'category', data: lineMonths, axisLabel: { color: '#6a6a78', fontSize: 10 }, axisLine: { lineStyle: { color: '#2a2a35' } } },
    yAxis: { type: 'value', axisLabel: { color: '#6a6a78' }, splitLine: { lineStyle: { color: '#2a2a35' } } },
    series: [{ type: 'line', data, smooth: true, areaStyle: { color: 'rgba(59,130,246,0.1)' }, lineStyle: { color: '#3b82f6' }, itemStyle: { color: '#3b82f6' } }],
  };
}

const winByProduct = makePie('按产品', [
  { name: 'JumpServer', value: 50.92, color: '#3b82f6' },
  { name: 'MaxKB', value: 26.60, color: '#8b5cf6' },
  { name: 'MeterSphere', value: 13.84, color: '#06b6d4' },
  { name: 'DataEase', value: 4.66, color: '#22c55e' },
  { name: '其他', value: 3.98, color: '#6a6a78' },
]);

const winBySource = makePie('按来源', [
  { name: '线上', value: 41.16, color: '#3b82f6' },
  { name: '线下-合作伙伴', value: 35.29, color: '#8b5cf6' },
  { name: '多期续费', value: 8.11, color: '#06b6d4' },
  { name: '线下-员工', value: 6.27, color: '#22c55e' },
  { name: '交叉销售', value: 9.17, color: '#f59e0b' },
]);

const activeByProduct = makePie('按产品', [
  { name: 'JumpServer', value: 45.11, color: '#3b82f6' },
  { name: 'MaxKB', value: 30.91, color: '#8b5cf6' },
  { name: 'MeterSphere', value: 14.83, color: '#06b6d4' },
  { name: 'DataEase', value: 3.81, color: '#22c55e' },
]);

const activeBySource = makePie('按来源', [
  { name: '线上', value: 51.84, color: '#3b82f6' },
  { name: '线下-合作伙伴', value: 12.82, color: '#8b5cf6' },
  { name: '多期续费', value: 11.54, color: '#06b6d4' },
  { name: '线下-员工', value: 11.23, color: '#22c55e' },
]);

const winLine = makeLine([45,38,52,60,48,55,70,65,58,72,80,75,50,42,58,66,54,62,78,72,64,80]);
const oppLine = makeLine([120,105,135,150,128,140,165,155,142,170,185,175,130,115,145,160,138,152,178,168,155,190]);

export default function DashboardPage() {
  return (
    <>
      <div className="dash-header">
        <div className="dash-header-left">
          <span className="dash-badge">DataEase</span>
          <Tabs items={['外链集成','模块嵌入']} active={0} onChange={() => {}} />
        </div>
        <span className="dash-update">有更新</span>
      </div>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>CRM销售全景分析</h2>

      <div className="chart-grid cols-1">
        <div className="chart-card">
          <div className="chart-card-title">近三年赢单分析（按月度）</div>
          <Chart option={barOption} tall />
        </div>
      </div>

      <div className="chart-grid cols-3" style={{ marginTop: 16 }}>
        <div className="chart-card">
          <div className="chart-card-title">当前会计年度赢单分析 - 按产品</div>
          <Chart option={winByProduct} />
        </div>
        <div className="chart-card">
          <div className="chart-card-title">当前会计年度赢单分析 - 按来源</div>
          <Chart option={winBySource} />
        </div>
        <div className="chart-card">
          <div className="chart-card-title">近2年 赢单数</div>
          <Chart option={winLine} />
        </div>
      </div>

      <div className="chart-grid cols-3" style={{ marginTop: 16 }}>
        <div className="chart-card">
          <div className="chart-card-title">当前会计年度活跃商机 - 按产品</div>
          <Chart option={activeByProduct} />
        </div>
        <div className="chart-card">
          <div className="chart-card-title">当前会计年度活跃商机 - 按来源</div>
          <Chart option={activeBySource} />
        </div>
        <div className="chart-card">
          <div className="chart-card-title">近2年 商机数</div>
          <Chart option={oppLine} />
        </div>
      </div>
    </>
  );
}
