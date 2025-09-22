export default function Projections({chartData, rechartsComponents}: any) {
    const {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis}: any = {...rechartsComponents};
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} barSize={20} margin={{top: 30, bottom: 30}} barGap={10}>
        <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)"  />
        <XAxis dy={15} tickLine={false} dataKey="month"/>
        <YAxis dx={-15} tickLine={false} axisLine={false} tickCount={4} tickFormatter={(value: number) => (value > 0) ? `${value}M`: value} />
        <Tooltip cursor={{fill: 'rgba(168, 197, 218, 0.2)'}} contentStyle={{backgroundColor: '#1C1C1C', borderRadius: '8px'}} />
        <Bar dataKey="actual" fill="rgba(168, 197, 218, 1)" stackId="stack" />
        <Bar dataKey="projected" fill="rgba(168, 197, 218, 0.5)" radius={[4, 4, 0, 0]} stackId="stack" />
        </BarChart>
        </ResponsiveContainer>
    )
}