import { useState } from "react";
import Dashboard from "./Dashboard";
import OrderList from "./OrderList";


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

const dashboardData = { dashboardMetaData, projectionsData, revenueGrowth, revenueByLocation, products, totalSales }; 

export default function DashboardDefault() {

	const [showUserList, setShowUserList] = useState(false);

	const toggleUserListInDashboard: any = () => {
		setShowUserList(!showUserList);
	}

    return (
		<div className="flex flex-col">
			<div className="head-crumb flex justify-between">
				<div className="text-sm font-semibold">{(showUserList) ? "Order List" : "eCommerce"}</div>
				<label className="inline-flex items-center mb-5 cursor-pointer">
					<input type="checkbox" value="" className="sr-only peer" onClick={toggleUserListInDashboard} />
					<div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1	peer-focus:ring-cyan-light/50 dark:peer-focus:ring-[rgb(44, 77, 102)] rounded-full peer dark:bg-[#424242] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-light dark:peer-checked:bg-[rgb(44, 77, 102)]"></div>
					<span className="ms-3 text-sm font-medium">{(!showUserList) ? "Order List" : ""}</span>
				</label>

			</div>
			{ showUserList ? 
				(<OrderList />) : 
				(<Dashboard dashboardData={dashboardData} />) 
			}
		</div>
    );
  }




  