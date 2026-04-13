function EmptyState({ title = 'No data available', message = 'There is nothing to show right now.' }) {
  return (
    <div className="empty-state">
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  )
}

export default EmptyState
