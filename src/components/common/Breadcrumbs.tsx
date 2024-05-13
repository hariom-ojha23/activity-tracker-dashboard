import * as React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadCrumbsProps {
    title: string
    href: string
}

const Breadcrumbs = ({breadCrumbs}: { breadCrumbs: BreadCrumbsProps[] }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    breadCrumbs.map((crumbs, index) => (
                        <React.Fragment key={crumbs.title}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={crumbs.href}>
                                    { crumbs.title }
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            { index !== breadCrumbs.length - 1 && <BreadcrumbSeparator /> }
                        </React.Fragment>
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default Breadcrumbs
