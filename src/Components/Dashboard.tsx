import Projections from "./Projections"
import { useRecharts } from "../contexts/RechartsComponentsContext";
import RevenueGrowth from "./RevenueGrowth";
import TotalSalesChart from "./TotalSalesChart";



// MetaDataCard component to display meta data of sales, user etc
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
									<div className="w-4 h-4 bg-[url('assets/ArrowRiseDark.svg')]"></div>
								:
								(cardDetails.positive) ? 
								<div className="w-4 h-4 bg-[url('assets/ArrowRiseDark.svg')] dark:bg-[url('assets/ArrowRiseWhite.svg')]"></div>
								:
								<div className="w-4 h-4 rotate-180 bg-[url('assets/ArrowRiseDark.svg')] dark:bg-[url('assets/ArrowRiseWhite.svg')]"></div>
							}
						</div>
					</div>
				}
			</div>
	)
}


export default function Dashboard({dashboardData}: any){

    const { dashboardMetaData, projectionsData, revenueGrowth, revenueByLocation, products, totalSales }: any = dashboardData;
    
	const rechartsComponents = useRecharts();

    return (
            <div className="flex flex-wrap gap-8">
            {/* MetaData cards */}

            <div className="metaCards flex-1 flex flex-wrap gap-5 content-between">
                {
                    dashboardMetaData.map((item: any) => (
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
            <div className="rev-growth grow shrink basis-[630px] min-h-[320px] max-h-[420px] projVSact min-w-[630px] p-6 bg-primary-card dark:bg-primary-card-dark rounded-xl">
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
            <img className="w-full" src="assets/Map.svg" alt="map" />

            <ul className="flex flex-col text-xs w-full gap-6 mt-4">
            {revenueByLocation.map((loc: any) => (

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
                        {products.map((p: any) => (
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
            <div className="flex-1 flex min-w-[200px] flex-col bg-primary-card dark:bg-primary-card-dark rounded-xl p-6">
                <h2 className="text-base font-semibold mb-4">Total Sales</h2>

                <div className="flex flex-col items-center">
                    <div className="w-30 h-30 mb-6 relative">
                        <TotalSalesChart chartData={totalSales} rechartsComponents={rechartsComponents} /> {/* Total sales component */}
                    </div>

                    <div className="sales-details flex flex-col justify-between gap-5 w-full py-1 text-sm">
                    {totalSales.map((item: any) => (
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
