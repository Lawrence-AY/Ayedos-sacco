import EmptyState from '../../components/common/EmptyState'
import { ROLES } from '../../utils/constants'
import AdminView from './AdminView'
import EmployeeView from './EmployeeView'
import FinanceView from './FinanceView'
import NonEmployeeView from './NonEmployeeView'

function Dashboard({ role }) {
  if (role === ROLES.ADMIN) return <AdminView />
  if (role === ROLES.FINANCE) return <FinanceView />
  if (role === ROLES.EMPLOYEE) return <EmployeeView />
  if (role === ROLES.NON_EMPLOYEE) return <NonEmployeeView />

  return <EmptyState title="Unauthorized" message="This role does not have an assigned dashboard." />
}

export default Dashboard
