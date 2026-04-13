import DashboardViewContent from './DashboardViewContent'
import { dashboardConfigs } from '../../data/dashboardData'
import { ROLES } from '../../utils/constants'

function FinanceView() {
  return <DashboardViewContent config={dashboardConfigs[ROLES.FINANCE]} />
}

export default FinanceView
