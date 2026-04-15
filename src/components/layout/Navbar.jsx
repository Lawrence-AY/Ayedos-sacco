import { HiBell, HiChevronDown } from 'react-icons/hi2'
import Button from '../ui/Button'

function Navbar({ title, userName, userRole, userInitials }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Ayedos SACCO Dashboard</p>
        <h1>{title}</h1>
      </div>

      <div className="topbar-actions">
        <button type="button" className="icon-button" aria-label="Notifications">
          <HiBell aria-hidden="true" />
        </button>

        <Button type="button" variant="ghost" className="user-chip">
          <div className="avatar-small">{userInitials}</div>
          <div>
            <strong>{userName}</strong>
            <span>{userRole}</span>
          </div>
          <HiChevronDown aria-hidden="true" />
        </Button>
      </div>
    </header>
  )
}

export default Navbar
