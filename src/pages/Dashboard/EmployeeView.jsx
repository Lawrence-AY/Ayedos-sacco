import DashboardViewContent from './DashboardViewContent'
import { dashboardConfigs } from '../../data/dashboardData'
import { ROLES } from '../../utils/constants'

function EmployeeView() {
  return <DashboardViewContent config={dashboardConfigs[ROLES.EMPLOYEE]} />
}

export default EmployeeView
