import DashboardViewContent from './DashboardViewContent'
import { dashboardConfigs } from '../../data/dashboardData'
import { ROLES } from '../../utils/constants'

function AdminView() {
  return <DashboardViewContent config={dashboardConfigs[ROLES.ADMIN]} />
}

export default AdminView
