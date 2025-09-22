export default function RevenueGrowth({chartData, rechartsComponents}: any) {
    const {LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis}: any = {...rechartsComponents};

    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{top: 25, bottom: 45, right: 5}} >
            <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dy={15} tickLine={false} dataKey="month" padding={{ left: 26, right: 26 }} />
            <YAxis dx={-15} tickLine={false} axisLine={false}  tickCount={4} tickFormatter={(value:number) => (value > 0) ? `${value}M`: value} />
            <Tooltip cursor={{fill: 'rgba(168, 197, 218, 0.2)'}} contentStyle={{backgroundColor: '#1C1C1C', borderRadius: '8px'}} />
            <Line type="monotone" dataKey="currSolid" stroke="rgba(198, 199, 248, 1)" strokeWidth={2} dot={false} name="Current Week" />
            <Line type="monotone" connectNulls={false} dataKey="currDotted" stroke="rgba(168, 197, 218, 1)" strokeWidth={3} dot={false} strokeDasharray="4 4" name="Current Week Increase" />
            <Line type="monotone" connectNulls={false} dataKey="previous" stroke="rgba(168, 197, 218, 1)" strokeWidth={2} dot={false} name="Previous Week" />
        </LineChart>
        </ResponsiveContainer>
    );
}