import DashboardViewContent from './DashboardViewContent'
import { dashboardConfigs } from '../../data/dashboardData'
import { ROLES } from '../../utils/constants'

function NonEmployeeView() {
  return <DashboardViewContent config={dashboardConfigs[ROLES.NON_EMPLOYEE]} />
}

export default NonEmployeeView
