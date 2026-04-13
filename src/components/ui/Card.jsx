function Card({ children, className = '', ...props }) {
  return (
    <article className={`surface-card ${className}`.trim()} {...props}>
      {children}
    </article>
  )
}

export default Card
