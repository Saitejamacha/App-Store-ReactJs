import './index.css'

// Sai Teja's Code

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClass = isActive && 'active-tab-btn'

  return (
    <li>
      <button
        className={`category-btn ${activeTabBtnClass}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
