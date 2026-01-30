import "./PieChartOverview.css";

const data = [
    { id: 0, label: "Entertainment", value: 15, color: "#2F7F7A", limit: 50 },
    { id: 1, label: "Bills", value: 150, color: "#8AC6D1", limit: 750 },
    { id: 2, label: "Dining Out", value: 133, color: "#F2C6A0", limit: 75 },
    { id: 3, label: "Personal Care", value: 40, color: "#5E5E6E", limit: 100 },
];

const total = data.reduce((a, b) => a + b.value, 0);
const limit = 975;

// Build SVG path for a donut segment (inner radius 90, outer 120)
function getSegmentPath(
    startAngle: number,
    endAngle: number,
    outerR: number,
    innerR: number,
    cx: number,
    cy: number
) {
    const rad = (deg: number) => (deg * Math.PI) / 180;
    const x = (r: number, a: number) => cx + r * Math.cos(rad(a));
    const y = (r: number, a: number) => cy + r * Math.sin(rad(a));
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return [
        `M ${x(outerR, startAngle)} ${y(outerR, startAngle)}`,
        `A ${outerR} ${outerR} 0 ${large} 1 ${x(outerR, endAngle)} ${y(outerR, endAngle)}`,
        `L ${x(innerR, endAngle)} ${y(innerR, endAngle)}`,
        `A ${innerR} ${innerR} 0 ${large} 0 ${x(innerR, startAngle)} ${y(innerR, startAngle)}`,
        "Z",
    ].join(" ");
}

export default function PieChart() {
    const cx = 130;
    const cy = 130;
    const outerR = 120;
    const innerR = 90;
    let currentAngle = 0;

    const segments = data.map((item) => {
        const angle = (item.value / total) * 360;
        const startAngle = currentAngle;
        currentAngle += angle;
        return {
            ...item,
            startAngle,
            endAngle: currentAngle,
            path: getSegmentPath(startAngle, currentAngle, outerR, innerR, cx, cy),
        };
    });

    return (
        <div className="pie-chart-overview">
            <div className="pie-chart-overview__chart-wrap">
                <svg className="pie-chart-overview__svg" width={260} height={260} viewBox="0 0 260 260">
                    {segments.map((seg) => (
                        <path
                            key={seg.id}
                            className="pie-chart-overview__segment"
                            d={seg.path}
                            fill={seg.color}
                            strokeWidth={2}
                        />
                    ))}
                </svg>
                <div className="chart__center">
                    <span className="chart__center-total">${total}</span>
                    <span className="chart__center-limit">of ${limit} limit</span>
                </div>
            </div>

            <div className="pie-chart-overview__legend">
                {data.map((item) => (
                    <div key={item.id} className="pie-chart-overview__box">
                        <span className="pie-chart-overview__label">{item.label}</span>
                        <span className="pie-chart-overview__limit">${item.limit.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
