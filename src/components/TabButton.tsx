import { h } from 'preact'

export const TabButton = ({ tabKey, label, isActive, onClick, count, index }) => {
  const buttonStyle = {
    flex: '1',
    padding: '16px 20px',
    background: 'transparent',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    color: isActive ? '#fff' : '#666',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    position: 'relative',
    zIndex: 2
  }

  const countStyle = {
    marginLeft: '8px',
    fontSize: '12px',
    color: isActive ? '#fff' : '#888',
    transition: 'color 0.3s ease'
  }

  return (
    <button
      style={buttonStyle}
      onClick={() => onClick(tabKey, index)}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.color = '#333'
          const countSpan = e.target.querySelector('span')
          if (countSpan) countSpan.style.color = '#555'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.color = '#666'
          const countSpan = e.target.querySelector('span')
          if (countSpan) countSpan.style.color = '#888'
        }
      }}
    >
      {label}
      {count !== undefined && <span style={countStyle}>({count})</span>}
    </button>
  )
}