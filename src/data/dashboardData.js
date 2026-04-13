import {
  HiArrowTrendingUp,
  HiBuildingLibrary,
  HiCheckBadge,
  HiCreditCard,
  HiDocumentText,
  HiIdentification,
  HiLockClosed,
  HiShieldCheck,
  HiUserCircle,
  HiUsers,
  HiWallet,
} from 'react-icons/hi2'
import { dividends } from './dividends'
import { members } from './members'
import { transactions } from './transactions'
import { formatCurrency } from '../utils/formatCurrency'
import { formatDate } from '../utils/formatDate'
import { ROLES } from '../utils/constants'

export const saccoHighlights = [
  'Regulated savings and credit cooperative platform',
  'Payroll-backed collections and transparent dividend reporting',
  'Verified identity workflows and auditable transaction controls',
]

export const roleCards = [
  {
    id: ROLES.ADMIN,
    name: 'Admin Dashboard',
    shortRole: 'Admin',
    description: 'Review members, compliance posture, approvals, and executive operational performance.',
    icon: HiShieldCheck,
  },
  {
    id: ROLES.FINANCE,
    name: 'Finance Officer Dashboard',
    shortRole: 'Finance Officer',
    description: 'Track savings inflows, dividends, loan balances, and transaction controls in one place.',
    icon: HiBuildingLibrary,
  },
  {
    id: ROLES.EMPLOYEE,
    name: 'Employee Member Dashboard',
    shortRole: 'Employee Member',
    description: 'Monitor monthly deductions, share capital growth, and dividend performance securely.',
    icon: HiUserCircle,
  },
  {
    id: ROLES.NON_EMPLOYEE,
    name: 'Non-Employee Member Dashboard',
    shortRole: 'Non-Employee Member',
    description: 'Review deposits, withdrawals, dividend history, and profile verification from the member portal.',
    icon: HiWallet,
  },
]

export const dashboardConfigs = {
  [ROLES.ADMIN]: {
    pageTitle: 'Admin Dashboard',
    userName: 'Alice Njeri',
    userInitials: 'AN',
    userRole: 'System Administrator',
    heroTitle: 'Manage SACCO operations with governance-level visibility',
    heroCopy:
      'Oversee onboarding, approvals, contribution health, and institutional controls from a secure executive workspace.',
    heroStats: [
      { icon: HiUsers, text: '91 active members' },
      { icon: HiCheckBadge, text: '14 pending approvals' },
    ],
    summaryCards: [
      { title: 'Total Members', value: '91', note: '7 new this quarter', tone: 'secondary', icon: HiUsers },
      { title: 'Verified Profiles', value: '84', note: 'Identity controls healthy', tone: 'success', icon: HiIdentification },
      { title: 'Pending Approvals', value: '14', note: 'Requires admin action', tone: 'primary', icon: HiDocumentText },
      { title: 'Compliance Score', value: '98%', note: 'Quarterly review current', tone: 'secondary', icon: HiShieldCheck },
    ],
    table: {
      title: 'Member Administration',
      subtitle: 'Approval pipeline and contribution standing',
      columns: ['Name', 'Member Type', 'ID Status', 'Contribution Status', 'Action'],
      rows: members.map((member, index) => ({
        id: member.id,
        cells: [member.name, member.memberType, member.idStatus, member.contributionStatus, ['Approve', 'Review', 'View', 'Notify'][index]],
      })),
    },
    chart: {
      title: 'Onboarding Progress',
      subtitle: 'Monthly identity verification completion',
      tag: 'Admin view',
      data: [
        { label: 'Jan', value: 42 },
        { label: 'Feb', value: 49 },
        { label: 'Mar', value: 58 },
        { label: 'Apr', value: 64 },
        { label: 'May', value: 72 },
        { label: 'Jun', value: 82 },
      ],
    },
    quickItems: [
      { label: 'Board reports', value: 'Ready for circulation' },
      { label: 'KYC exceptions', value: '3 members require review' },
      { label: 'Access control', value: '2FA enabled for all officers' },
    ],
  },
  [ROLES.FINANCE]: {
    pageTitle: 'Finance Officer Dashboard',
    userName: 'Brian Otieno',
    userInitials: 'BO',
    userRole: 'Finance Officer',
    heroTitle: 'Financial operations with real-time SACCO visibility',
    heroCopy: 'Monitor savings, dividends, member contributions, and transaction quality from a clean finance command center.',
    heroStats: [
      { icon: HiWallet, text: `${formatCurrency(2480000)} total savings` },
      { icon: HiArrowTrendingUp, text: 'Dividend cycle on track' },
    ],
    summaryCards: [
      { title: 'Total Savings', value: formatCurrency(2480000), note: '+8.4% from last quarter', tone: 'primary', icon: HiWallet },
      { title: 'Share Capital', value: formatCurrency(1120000), note: '92 active contributors', tone: 'secondary', icon: HiBuildingLibrary },
      { title: 'Dividends Earned', value: formatCurrency(348500), note: '2025 payout cleared', tone: 'success', icon: HiArrowTrendingUp },
      { title: 'Loan Balance', value: formatCurrency(640000), note: '3 facilities under review', tone: 'secondary', icon: HiCreditCard },
    ],
    table: {
      title: 'Recent Transactions',
      subtitle: 'Latest financial activity across collection channels',
      columns: ['Date', 'Type', 'Amount', 'Method', 'Status'],
      rows: transactions.map((transaction) => ({
        id: transaction.id,
        cells: [formatDate(transaction.date), transaction.type, formatCurrency(transaction.amount), transaction.method, transaction.status],
      })),
    },
    chart: {
      title: 'Savings Growth',
      subtitle: 'Monthly contribution momentum across the current cycle',
      tag: 'Stable trend',
      data: [
        { label: 'Jan', value: 48 },
        { label: 'Feb', value: 54 },
        { label: 'Mar', value: 63 },
        { label: 'Apr', value: 67 },
        { label: 'May', value: 73 },
        { label: 'Jun', value: 84 },
      ],
    },
    quickItems: [
      { label: 'Salary remittance', value: 'Cleared for April cycle' },
      { label: 'Dividend batch', value: '97% successfully processed' },
      { label: 'Audit trail', value: 'No unresolved exceptions' },
    ],
  },
  [ROLES.EMPLOYEE]: {
    pageTitle: 'Employee Member Dashboard',
    userName: 'Cynthia Wairimu',
    userInitials: 'CW',
    userRole: 'Employee Member',
    heroTitle: 'Track your SACCO growth through payroll-linked contributions',
    heroCopy: 'View savings balances, dividend earnings, and contribution consistency from a secure employee member portal.',
    heroStats: [
      { icon: HiDocumentText, text: 'Payroll deduction active' },
      { icon: HiArrowTrendingUp, text: 'Consistent monthly growth' },
    ],
    summaryCards: [
      { title: 'My Savings', value: formatCurrency(420000), note: 'Auto-funded through payroll', tone: 'primary', icon: HiWallet },
      { title: 'Share Capital', value: formatCurrency(180000), note: 'Growing steadily', tone: 'secondary', icon: HiBuildingLibrary },
      { title: 'Dividends Earned', value: formatCurrency(48200), note: 'Latest payout received', tone: 'success', icon: HiArrowTrendingUp },
      { title: 'Loan Balance', value: formatCurrency(75000), note: 'On repayment schedule', tone: 'secondary', icon: HiCreditCard },
    ],
    table: {
      title: 'My Transactions',
      subtitle: 'Personal contribution and withdrawal history',
      columns: ['Date', 'Type', 'Amount', 'Method', 'Status'],
      rows: [
        ['2026-04-12', 'Deposit', 15000, 'Payroll', 'Success'],
        ['2026-03-10', 'Dividend', 8400, 'Wallet', 'Success'],
        ['2026-03-08', 'Loan Repayment', 5000, 'Payroll', 'Success'],
        ['2026-02-26', 'Withdrawal', 12000, 'Mobile Money', 'Pending'],
      ].map((row, index) => ({
        id: index + 1,
        cells: [formatDate(row[0]), row[1], formatCurrency(row[2]), row[3], row[4]],
      })),
    },
    chart: {
      title: 'Contribution Growth',
      subtitle: 'Six-month trend for personal savings performance',
      tag: 'Healthy pace',
      data: [
        { label: 'Jan', value: 34 },
        { label: 'Feb', value: 38 },
        { label: 'Mar', value: 46 },
        { label: 'Apr', value: 52 },
        { label: 'May', value: 61 },
        { label: 'Jun', value: 69 },
      ],
    },
    quickItems: [
      { label: 'Member status', value: 'Verified and active' },
      { label: 'Next deduction', value: '30 Apr 2026 via payroll' },
      { label: 'Dividend option', value: 'Auto-reinvest enabled' },
    ],
  },
  [ROLES.NON_EMPLOYEE]: {
    pageTitle: 'Non-Employee Member Dashboard',
    userName: 'Daniel Kibet',
    userInitials: 'DK',
    userRole: 'Non-Employee Member',
    heroTitle: 'Manage your SACCO account independently and securely',
    heroCopy: 'Review deposits, savings growth, dividends, and verification status in a professional member dashboard built for trust.',
    heroStats: [
      { icon: HiLockClosed, text: 'Secure mobile money funding' },
      { icon: HiShieldCheck, text: 'Profile verification monitored' },
    ],
    summaryCards: [
      { title: 'My Savings', value: formatCurrency(265000), note: 'Funded by direct deposits', tone: 'primary', icon: HiWallet },
      { title: 'Share Capital', value: formatCurrency(94000), note: 'Contribution plan active', tone: 'secondary', icon: HiBuildingLibrary },
      { title: 'Dividends Earned', value: formatCurrency(21700), note: 'Paid in last annual cycle', tone: 'success', icon: HiArrowTrendingUp },
      { title: 'Pending Withdrawal', value: formatCurrency(9500), note: 'Awaiting confirmation', tone: 'secondary', icon: HiCreditCard },
    ],
    table: {
      title: 'My Activity',
      subtitle: 'Deposits, withdrawals, and dividend activity',
      columns: ['Date', 'Type', 'Amount', 'Method', 'Status'],
      rows: [
        ['2026-04-11', 'Deposit', 10000, 'Mobile Money', 'Success'],
        ['2026-04-08', 'Withdrawal', 9500, 'Mobile Money', 'Pending'],
        ['2026-04-02', 'Deposit', 12000, 'Bank Transfer', 'Success'],
        ['2026-03-15', 'Dividend', 4800, 'Wallet', 'Success'],
      ].map((row, index) => ({
        id: index + 1,
        cells: [formatDate(row[0]), row[1], formatCurrency(row[2]), row[3], row[4]],
      })),
    },
    chart: {
      title: 'Savings Growth',
      subtitle: 'Recent account build-up through direct contributions',
      tag: 'Positive movement',
      data: [
        { label: 'Jan', value: 26 },
        { label: 'Feb', value: 31 },
        { label: 'Mar', value: 39 },
        { label: 'Apr', value: 45 },
        { label: 'May', value: 53 },
        { label: 'Jun', value: 62 },
      ],
    },
    quickItems: [
      { label: 'Verification', value: 'National ID approved' },
      { label: 'Preferred method', value: 'Mobile Money collection' },
      { label: 'Support channel', value: 'Member services available' },
    ],
  },
}

export const dividendSummary = {
  total: formatCurrency(dividends.reduce((sum, item) => sum + item.amount, 0)),
  items: dividends.map((item) => ({ ...item, amountLabel: formatCurrency(item.amount) })),
}
