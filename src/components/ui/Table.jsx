import Badge from './Badge'

const statusColumns = new Set(['status', 'id status'])

function Table({ columns, rows }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) => {
                const columnName = columns[index].toLowerCase()

                return (
                  <td key={`${row.id}-${columns[index]}`}>
                    {statusColumns.has(columnName) ? <Badge tone="auto">{cell}</Badge> : cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
