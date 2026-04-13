import Navbar from './Navbar'
import Sidebar from './Sidebar'

function DashboardLayout({ role, userName, userRole, userInitials, title, onLogout, children }) {
  return (
    <div className="dashboard-shell">
      <Sidebar role={role} userName={userName} userRole={userRole} onLogout={onLogout} />
      <div className="main-panel">
        <Navbar title={title} userName={userName} userRole={userRole} userInitials={userInitials} />
        <main className="content-area">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
