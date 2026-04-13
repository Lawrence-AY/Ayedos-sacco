function Badge({ children, tone = 'info' }) {
  const badgeTone = String(children).toLowerCase().replace(/\s+/g, '-')
  const finalTone = tone === 'auto' ? badgeTone : tone

  return <span className={`status-badge ${finalTone}`}>{children}</span>
}

export default Badge
