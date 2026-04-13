import {
  HiChartBarSquare,
  HiDocumentText,
  HiOutlineArrowLeftOnRectangle,
  HiSquares2X2,
  HiUserCircle,
} from 'react-icons/hi2'
import Button from '../ui/Button'
import { ROLE_MENU } from '../../utils/constants'

const menuIcons = [HiSquares2X2, HiDocumentText, HiChartBarSquare, HiUserCircle]

function Sidebar({ role, userName, userRole, onLogout }) {
  const menuItems = ROLE_MENU[role] ?? []

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand__mark">A</div>
        <div>
          <strong>Ayedous SACCO</strong>
          <span>{userRole}</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Role dashboard navigation">
        {menuItems.map((item, index) => {
          const Icon = menuIcons[index] ?? HiSquares2X2

          return (
            <div key={item} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <Icon aria-hidden="true" />
              <span>{item}</span>
            </div>
          )
        })}
      </nav>

      <div className="sidebar-panel">
        <p className="eyebrow">Signed in as</p>
        <strong>{userName}</strong>
        <span>{userRole}</span>
        <Button type="button" variant="sidebar" className="logout-button" onClick={onLogout}>
          <HiOutlineArrowLeftOnRectangle aria-hidden="true" />
          Logout
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
