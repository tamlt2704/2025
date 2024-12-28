import PropTypes from 'prop-types'

export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <div>
      <label htmlFor='sort'>Sort by:</label>
      <select
        id='sort'
        name='sort'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {fields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      {'/'}
      <label htmlFor='order'>Order:</label>
      <select
        id='order'
        name='order'
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
      >
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
    </div>
  )
}

PostSorting.prototype = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  varlue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired,
}
