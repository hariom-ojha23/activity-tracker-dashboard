'use client'

import React from 'react'
import SidebarDesktop from './SidebarDesktop'
import { SidebarItems } from '../constants/sidebarItems'

const Sidebar = () => {
  return (
    <SidebarDesktop sidebarItems={SidebarItems} />
  )
}

export default Sidebar