import { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { dashboardConfigs } from '../data/dashboardData'
import Dashboard from '../pages/Dashboard/Dashboard'
import LandingPage from '../pages/Landing/LandingPage'

function AppRoutes() {
  const [activeRole, setActiveRole] = useState(null)

  if (!activeRole) {
    return <LandingPage onEnterDashboard={setActiveRole} />
  }

  const config = dashboardConfigs[activeRole]

  return (
    <DashboardLayout
      role={activeRole}
      userName={config.userName}
      userRole={config.userRole}
      userInitials={config.userInitials}
      title={config.pageTitle}
      onLogout={() => setActiveRole(null)}
    >
      <Dashboard role={activeRole} />
    </DashboardLayout>
  )
}

export default AppRoutes
