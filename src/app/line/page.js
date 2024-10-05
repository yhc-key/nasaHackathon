import dynamic from "next/dynamic";

// 동적 import로 LineChart 컴포넌트를 클라이언트에서만 로드
const LineChart = dynamic(() => import("/src/app/line/LineChart.js"), {
  ssr: false, // 서버사이드 렌더링 비활성화
});

const ChartPage = () => {
  return (
    <div>
      <h1>Line Chart Example</h1>
      <LineChart />
    </div>
  );
};

export default ChartPage;
