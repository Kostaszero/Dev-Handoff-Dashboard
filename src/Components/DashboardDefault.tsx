import Projections from "./Projections"
import { useRecharts } from "../contexts/RechartsComponentsContext";
import RevenueGrowth from "./RevenueGrowth";
import TotalSalesChart from "./TotalSalesChart";

const dashboardMetaData = [
	{ title: "Customers", value: "3,781", change: "+11.01%", positive: true, color: "#E3F5FF" },
	{ title: "Orders", value: "1,219", change: "-0.03%", positive: false, color: null },
	{ title: "Revenue", value: "$695", change: "+15.03%", positive: true, color: null },
	{ title: "Growth", value: "30.1%", change: "+6.08%", positive: true, color: "#E5ECF6" },
]

const projectionsData = [
	{ month: "Jan", actual: 20, projected: 25 },
	{ month: "Feb", actual: 25, projected: 29 },
	{ month: "Mar", actual: 18, projected: 22 },
	{ month: "Apr", actual: 24, projected: 28 },
	{ month: "May", actual: 15, projected: 19 },
	{ month: "Jun", actual: 21, projected: 27 },
];
  
const revenueGrowth = [
	{ month: "Jan", current: 12, previous: 8, currSolid: 12, currDotted: null },
	{ month: "Feb", current: 8, previous: 16, currSolid: 8, currDotted: null },
	{ month: "Mar", current: 11, previous: 14, currSolid: 11, currDotted: null },
	{ month: "Apr", current: 15, previous: 12, currSolid: 16, currDotted: 16 },
	{ month: "May", current: 19, previous: 14, currSolid: null, currDotted: 20 },
	{ month: "Jun", current: 22, previous: 20, currSolid: null, currDotted: 18 },
];

const revenueByLocation = [
	{ city: "New York", value: 72 },
	{ city: "San Francisco", value: 39 },
	{ city: "Sydney", value: 25 },
	{ city: "Singapore", value: 61 },
];

const products = [
	{ name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
	{ name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: 4754.5 },
	{ name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
	{ name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680 },
	{ name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

const totalSales = [
	{ name: "Direct", value: 300.56, color: "#C6C7F8" },
	{ name: "Affiliate", value: 135.18, color: "#BAEDBD" },
	{ name: "Sponsored", value: 154.02, color: "#95A4FC" },
	{ name: "E-mail", value: 48.96, color: "#B1E3FF" },
];


const MetaDataCard = ({cardDetails}: any) => {
	return (
			<div className={`flex flex-col cursor-pointer flex-1 min-h-[115px] min-w-[200px] justify-around 
			${cardDetails.color ? "text-background-dark" : "bg-primary-card dark:bg-primary-card-dark" } rounded-xl p-6`}
				style={cardDetails.color ? { backgroundColor: `${cardDetails.color}` } : {}}>
				<h3 className="text-sm font-semibold">{cardDetails.title}</h3>
				{
					<div className="text-xs flex items-center justify-between">
						<p className="text-2xl font-semibold">{cardDetails.value}</p>
						<div className="flex">
							<div>{cardDetails.change}</div> 
							{
								(cardDetails.color) ? 
									<div className="w-4 h-4 bg-[url('/assets/ArrowRiseDark.svg')]"></div>
								:
								(cardDetails.positive) ? 
								<div className="w-4 h-4 bg-[url('/assets/ArrowRiseDark.svg')] dark:bg-[url('/assets/ArrowRiseWhite.svg')]"></div>
								:
								<div className="w-4 h-4 rotate-180 bg-[url('/assets/ArrowRiseDark.svg')] dark:bg-[url('/assets/ArrowRiseWhite.svg')]"></div>
							}
						</div>
					</div>
				}
			</div>
	)
}



export default function DashboardDefault() {

	const rechartsComponents = useRecharts();

	// const {Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} = {...rechartsComponents};

    return (
		<div className="flex flex-wrap gap-8">
			{/* MetaData cards */}

			<div className="metaCards flex-1 flex flex-wrap gap-5 content-between">
				{
					dashboardMetaData.map(item => (
						<MetaDataCard cardDetails={item} key={item.title} />
					))
				}
			</div>
			
			{/* Projects vs Actual */}
			<div className="projVSact flex-1 min-h-[250px] min-w-[450px] p-6 bg-primary-card dark:bg-primary-card-dark rounded-xl">
				<h3 className="text-sm font-semibold">Projections vs Actuals</h3>

				<Projections chartData={projectionsData} rechartsComponents={rechartsComponents} /> {/* Projections component */}
			</div>

			{/* Revenue Growth Chart */}
			<div className="rev-growth grow shrink basis-[630px] max-h-[420px] projVSact min-w-[630px] p-6 bg-primary-card dark:bg-primary-card-dark rounded-xl">
				<div className="flex items-center gap-6 mb-4">
					<h3 className="text-sm font-semibold">Revenue</h3>
					<div className="h-[16px] border-r-2 border-solid border-text-20 dark:border-text-dark-20"></div>
					<div className="flex gap-4 text-xs">
						<span className="flex items-center gap-1">
							<span className="w-[6px] me-1 h-[6px] rounded-full bg-[#C6C7F8]"></span>
							Current Week <span className="font-semibold">$58,211</span>
						</span>
						<span className="flex items-center gap-1 ">
							<span className="w-[6px] me-1 h-[6px] rounded-full bg-cyan"></span>
							Previous Week <span className="font-semibold">$68,768</span>
						</span>
					</div>
				</div>

				<RevenueGrowth chartData={revenueGrowth} rechartsComponents={rechartsComponents} /> {/* Revevnue growth component */}
			</div>


			{/* Revenue by Location */}
			<div className="flex-1 flex flex-col min-w-[200px] justify-around items-center bg-primary-card dark:bg-primary-card-dark rounded-xl p-6">
			<h3 className="text-base font-semibold mb-4">Revenue by Location</h3>
			<img className="w-full" src="/assets/Map.svg" alt="map" />

			<ul className="flex flex-col text-xs w-full gap-6 mt-4">
			{revenueByLocation.map(loc => (

				<li key={loc.city} className="flex flex-col justify-between">
					<div className="flex justify-between items-center mb-1">
						<span>{loc.city}</span>
						<span className="text-xs">{loc.value}K</span>
					</div>
					
					<div className="flex w-full">
						<div className="w-full h-[2px] bg-cyan-xl rounded-full">
						<div
							className="h-[2px] bg-cyan-base"
							style={{ width: `${loc.value}%`, backgroundColor: 'rgba(168, 197, 218, 1)' }}
						/>
						</div>
					</div>
				</li>
			))}
			</ul>
			</div>



			{/* Top Selling Products */}
			<div className="top-selling max-h-[340px] grow shrink basis-[630px] min-w-[630px] justify-around items-center bg-primary-card dark:bg-primary-card-dark rounded-xl p-6">
				<h2 className="text-base font-semibold mb-5">
					Top Selling Products
				</h2>
				<div className="overflow-x-auto">
					<table className="w-full text-xs text-left text-text dark:text-text-dark">
					<thead className="text-text-40 dark:text-text-dark-40 border-b border-border-color dark:border-border-color-dark">
						<tr>
						<th className="pb-3">Name</th>
						<th className="pb-3">Price</th>
						<th className="pb-3">Quantity</th>
						<th className="pb-3">Amount</th>
						</tr>
					</thead>
					<tbody>
						{products.map(p => (
						<tr key={p.name}>
							<td className="py-3">{p.name}</td>
							<td className="py-3">${p.price}</td>
							<td className="py-3">{p.quantity}</td>
							<td className="py-3">${p.amount.toLocaleString()}</td>
						</tr>
						))}
					</tbody>
					</table>
				</div>
			</div>




			{/* Total Sales */}
			<div className="flex-1 flex flex-col bg-primary-card dark:bg-primary-card-dark rounded-xl p-6">
				<h2 className="text-base font-semibold mb-2">Total Sales</h2>

				<div className="flex flex-col items-center">
					<div className="w-40 h-40 mb-6 relative">
						<TotalSalesChart chartData={totalSales} rechartsComponents={rechartsComponents} /> {/* Total sales component */}
					</div>

					<div className="sales-details flex flex-col justify-between gap-5 w-full p-1 text-sm">
					{totalSales.map(item => (
						<div key={item.name} className="flex justify-between">
						<span className="flex items-center gap-2">
							<span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: item.color }}></span>
							{item.name}
						</span>
						<span>
							${item.value.toFixed(2)}
						</span>
						</div>
					))}
					</div>
				</div>
			</div>
		</div>
    );
  }




  