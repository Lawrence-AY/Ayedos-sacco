export const ROLES = {
  ADMIN: 'admin',
  FINANCE: 'finance',
  EMPLOYEE: 'employee',
  NON_EMPLOYEE: 'non-employee',
}

export const ROLE_MENU = {
  [ROLES.ADMIN]: ['Dashboard', 'Members', 'Transactions', 'Compliance'],
  [ROLES.FINANCE]: ['Dashboard', 'Transactions', 'Dividends', 'Reports'],
  [ROLES.EMPLOYEE]: ['Dashboard', 'Savings', 'Dividends', 'Profile'],
  [ROLES.NON_EMPLOYEE]: ['Dashboard', 'Transactions', 'Deposit', 'Profile'],
}
