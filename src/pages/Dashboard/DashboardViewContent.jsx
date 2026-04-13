import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'

function SummaryGrid({ cards }) {
  return (
    <section className="summary-grid">
      {cards.map((card) => {
        const Icon = card.icon

        return (
          <article key={card.title} className={`summary-card ${card.tone}`}>
            <div className="summary-card__top">
              <div>
                <p className="eyebrow">{card.title}</p>
                <h3>{card.value}</h3>
              </div>
              <div className="summary-card__icon">
                <Icon aria-hidden="true" />
              </div>
            </div>
            <p className="summary-card__note">{card.note}</p>
          </article>
        )
      })}
    </section>
  )
}

function GrowthChart({ chart }) {
  const points = chart.data
    .map((point, index) => {
      const x = index * 96 + 18
      const y = 150 - point.value
      return `${x},${y}`
    })
    .join(' ')

  return (
    <Card className="chart-card">
      <div className="section-heading">
        <div>
          <h2>{chart.title}</h2>
          <p>{chart.subtitle}</p>
        </div>
        <Badge tone="success">{chart.tag}</Badge>
      </div>

      <div className="chart-shell">
        <svg viewBox="0 0 520 180" role="img" aria-label={chart.title}>
          <defs>
            <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(30, 136, 229, 0.32)" />
              <stop offset="100%" stopColor="rgba(30, 136, 229, 0.04)" />
            </linearGradient>
          </defs>
          <path d={`M 18 160 L ${points} L 498 160 Z`} fill="url(#chartFill)" />
          <polyline points={points} className="chart-line" />
          {chart.data.map((point, index) => {
            const x = index * 96 + 18
            const y = 150 - point.value
            return <circle key={point.label} cx={x} cy={y} r="5" className="chart-dot" />
          })}
        </svg>

        <div className="chart-axis">
          {chart.data.map((point) => (
            <span key={point.label}>{point.label}</span>
          ))}
        </div>
      </div>
    </Card>
  )
}

function DashboardViewContent({ config }) {
  return (
    <>
      <section className="hero-banner">
        <div>
          <p className="eyebrow">Dashboard Overview</p>
          <h2>{config.heroTitle}</h2>
          <p className="muted-copy">{config.heroCopy}</p>
        </div>

        <div className="hero-metrics">
          {config.heroStats.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.text}>
                <Icon aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </section>

      <SummaryGrid cards={config.summaryCards} />

      <section className="dashboard-grid">
        <Card>
          <div className="section-heading">
            <div>
              <h2>{config.table.title}</h2>
              <p>{config.table.subtitle}</p>
            </div>
            <Badge tone="admin">{config.userRole}</Badge>
          </div>
          <Table columns={config.table.columns} rows={config.table.rows} />
        </Card>

        <div className="page-stack">
          <GrowthChart chart={config.chart} />

          <Card>
            <div className="section-heading">
              <div>
                <h2>Quick Notes</h2>
                <p>Operational context for this role</p>
              </div>
            </div>

            <div className="detail-list">
              {config.quickItems.map((item) => (
                <div key={item.label} className="detail-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default DashboardViewContent
