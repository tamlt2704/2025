import PropTypes from 'prop-types'

export function PostFiler({ field, value, onChange }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}</label>
      <input
        id={`filter-${field}`}
        name={`filter-${field}`}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

PostFiler.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
