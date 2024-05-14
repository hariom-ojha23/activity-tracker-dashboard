import Breadcrumbs from "@/components/common/Breadcrumbs"
import Indicator from "@/components/dashboard/Indicator"
import { Payment, columns } from "@/components/datatable/Columns"
import { DataTable } from "@/components/datatable/Datatable"

export default async function Dashboard() {
    const crumbs = [{ title: 'Dashboard', href: '/dashboard' }]
    const indicators = [
        { title: 'Total Employees', value: 56, },
        { title: 'Active Employees', value: 20, },
        { title: 'Inactive Employees', value: 36, },
    ]

    let data: Payment[] = [
        {
            id: "1",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "2",
            amount: 200,
            status: "success",
            email: "om@example.com",
        },
        {
            id: "1",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "2",
            amount: 200,
            status: "success",
            email: "om@example.com",
        },
        {
            id: "1",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
    ]

    return (
        <div className="p-2">
            <Breadcrumbs breadCrumbs={crumbs} />
            <div className="w-full h-22 mt-10 flex gap-6">
                {
                    indicators.map(({ title, value }, index) => (
                        <Indicator key={index} title={title} value={value}  />
                    ))
                }
            </div>

            <div className="pt-10 w-[67.5%]">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}