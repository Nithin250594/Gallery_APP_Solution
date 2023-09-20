// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, thumbnailClick, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const clickThumbnail = () => {
    thumbnailClick(id)
  }

  const thumbnailOpacity = isActive ? 'noOpacity' : 'yesOpacity'

  return (
    <li key={id} className="gallery-list">
      <button type="button" onClick={clickThumbnail} className="button-style">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailOpacity}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
