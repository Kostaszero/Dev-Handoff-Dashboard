export default function TotalSalesChart({chartData, rechartsComponents}: any) {
	const totalSalesRev = chartData.reduce((prev: number, cur: any) => prev + cur.value, 0);

    const {Cell, Pie, PieChart, ResponsiveContainer, Tooltip}: any = {...rechartsComponents};
    return (
        <ResponsiveContainer>
            <PieChart>
            <Pie data={chartData} dataKey="value" cornerRadius={10} innerRadius={40} outerRadius={60} 
                paddingAngle={-20} stroke="transparent">
                {
                    chartData.map((entry: any, index: number) => (<Cell key={`cell-${index}`} fill={entry.color} />))
                }
            </Pie>
            <Tooltip formatter={(value: number, _:any, __:any) => [`${((value/totalSalesRev) * 100).toFixed(1)}%`, undefined]}
                contentStyle={{
                backgroundColor: "#1C1C1CCC",
                border: "none",
                borderRadius: "8px",
                }}
                itemStyle={{
                    color: '#FFFFFF'
                }}
            />
                </PieChart>
        </ResponsiveContainer>
    );
}