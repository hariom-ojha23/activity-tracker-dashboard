import Breadcrumbs from "@/components/common/Breadcrumbs"
import Indicator from "@/components/dashboard/Indicator"

export default function Dashboard() {
    const crumbs = [{ title: 'Dashboard', href: '/dashboard' }]
    const indicators = [
        { title: 'Total Employees', value: 56, },
        { title: 'Active Employees', value: 20, },
        { title: 'Inactive Employees', value: 36, },
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
        </div>
    )
}