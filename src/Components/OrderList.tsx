import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, type SortingState, getPaginationRowModel } from "@tanstack/react-table";
import { useMemo, useState } from "react";


const orders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "assets/user1.svg" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "assets/user3.svg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "assets/user2.svg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "assets/user1.svg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "assets/user4.svg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

// Status colors
const statusColors: Record<string, string> = {
  "In Progress": "rgba(138, 140, 217, 1)",
  "Complete": "rgba(74, 167, 133, 1)",
  "Pending": "rgba(89, 168, 212, 1)",
  "Approved": "rgba(255, 197, 85, 1)",
  "Rejected": "rgb(255 138 138 / 40%)",
};



//Order List component starts

export default function OrderTable() {

    
    // Column helper for table

    const columns = useMemo(() => [
        {
        accessorKey: "id",
        header: () => "Order ID",
        cell: (info: any) => <span>{info.getValue() as string}</span>,
        },
        {
        accessorKey: "user",
        header: () => "User",
        cell: ({ row }: any) => (
            <div className="flex items-center gap-2">
            <img src={row.original.user.avatar} alt={row.original.user.name} className="w-8 h-8 rounded-full" />
            <span>{row.original.user.name}</span>
            </div>
        ),
        },
        {
        accessorKey: "project",
        header: () => "Project",
        cell: (info: any) => <span>{info.getValue() as string}</span>,
        },
        {
        accessorKey: "address",
        header: () => "Address",
        cell: (info: any) => <span>{info.getValue() as string}</span>,
        },
        {
        accessorKey: "date",
        header: () => "Date",
        cell: (info: any) => 
                            <span className="flex gap-1">
                                <img src="assets/CalendarBlank.svg"  className="hidden dark:block" />
                                <img src="assets/CalendarBlankLight.svg" className="block dark:hidden" />
                                <span>{info.getValue() as string}</span>
                            </span>,
        },
        {
        accessorKey: "status",
        header: () => "Status",
        cell: (info: any) => (
            <span className="flex items-center gap-1">
                <span className="w-[6px] h-[6px] rounded-full" style={{backgroundColor: statusColors[info.getValue()]}}></span>
                <span style={{color: statusColors[info.getValue()]}}>
                {info.getValue() as string}
                </span>
            </span>
        ),
        },
    ], []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  // Filtered data for search bar
  const filteredOrders = useMemo(() => {
    const text = search.toLowerCase();
    return orders.filter((order) =>
      [order.id, order.user.name, order.project, order.address, order.date, order.status]
        .some((field) => field.toLowerCase().includes(text))
    );
  }, [search]);

  const table = useReactTable({
    data: filteredOrders,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),  
    initialState: {
        pagination: { pageSize: 5 },
      },
  });

  return (
    <div className="p-4">
        <div className="mb-2 justify-between items-center flex p-2 rounded-[8px] bg-primary-card dark:bg-background/5">
            <div className="flex pe-4">
                <div className="p-2 hover:bg-background-dark/8 dark:hover:bg-primary-card-dark rounded-full cursor-pointer add">
                    <img src="assets/Add.svg" alt="+" className="hidden dark:block w-5 h-5" />
                    <img src="assets/AddLight.svg" alt="+" className="block dark:hidden w-5 h-5" />
                </div>
                <div className="p-2 hover:bg-background-dark/8 dark:hover:bg-primary-card-dark rounded-full cursor-pointer funnel">
                    <img src="assets/FunnelSimple.svg" alt="Funnel" className="hidden dark:block w-5 h-5"/>
                    <img src="assets/FunnelSimpleLight.svg" alt="Funnel" className="block dark:hidden w-5 h-5" />
                </div>
                <div className="p-2 hover:bg-background-dark/8 dark:hover:bg-primary-card-dark rounded-full cursor-pointer sort">
                    <img src="assets/ArrowsDownUp.svg" alt="sort" className="hidden dark:block w-5 h-5" />
                    <img src="assets/ArrowsDownUpLight.svg" alt="sort" className="block dark:hidden w-5 h-5" />
                </div>
            </div>
            {/* Search bar */}
            <div className="search-bar relative">
                    <img src="assets/SearchLight.svg" alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 block dark:hidden" />
                    <img src="assets/Search.svg" alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 hidden dark:block" />
                    <input id="search-bar" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}
                    className="bg-background/40 dark:bg-background-dark/40 border border-background-dark/10 text-sm placeholder-text/30 dark:placeholder-text-dark-20 pl-9 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600"/>
            </div>
        </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-text/20 dark:border-text-dark/20">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-3 font-normal text-xs text-text-40 dark:text-text-dark-40">
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-1 cursor-pointer select-none" onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{ 
                            asc: (
                                <>
                                    <img src="assets/ArrowsUp.svg" alt="Sort ascending" className="hidden dark:block w-3 h-3" />
                                    <img src="assets/ArrowsUpLight.svg" alt="Sort ascending" className="block dark:hidden w-3 h-3" />
                                </>
                            ),
                            desc: (
                                <>
                                    <img src="assets/ArrowsDown.svg" alt="Sort descending" className="hidden dark:block w-3 h-3" />
                                    <img src="assets/ArrowsDownLight.svg" alt="Sort descending" className="block dark:hidden w-3 h-3" />
                                </>
                            ),
                         } [header.column.getIsSorted() as string] ?? <span className="w-3 h-3"></span>}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b rounded-[8px] border-border-color dark:border-border-color-dark hover:bg-primary-card dark:hover:bg-background/5">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-xs">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-end items-center mt-4">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-3 py-1 rounded-[8px] cursor-pointer disabled:opacity-50">
          <img src="assets/ArrowLinePageLight.svg" alt="<" className="block dark:hidden hover:bg-background-dark/5 hover:dark:bg-background/5" />
          <img src="assets/ArrowLinePage.svg" alt="<" className="hidden dark:block hover:bg-background-dark/5 hover:dark:bg-background/5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button key={i} onClick={() => table.setPageIndex(i)} className={`px-3 py-1 rounded-[8px] cursor-pointer 
            ${ table.getState().pagination.pageIndex === i ? "hover:bg-background-dark/5 hover:dark:bg-background/5" : "" }`}>
              {i + 1}
            </button>
          ))}
        </div>

        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-3 py-1 rounded-[8px] cursor-pointer disabled:opacity-50 " >
            <img src="assets/ArrowLinePageLight.svg" alt=">" className="block dark:hidden rotate-180 hover:bg-background-dark/5 hover:dark:bg-background/5" />
            <img src="assets/ArrowLinePage.svg" alt=">" className="hidden dark:block rotate-180 hover:bg-background-dark/5 hover:dark:bg-background/5" />
        </button>
        </div>
    </div>
  );
}
