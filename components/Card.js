function Card({ img, alt, title, description, link }) {
  return (
    <a href={link} className="p-1 sm:p-2 bg-indigo-50 cursor-pointer">
      <div className="card">
        <img src={img} alt={alt} />
        <div className="card-content">
          <div className="card-title text-sm text-gray-500">{title}</div>
          <div className="card-description pt-1 text-xs sm:text-sm text-gray-500 truncate">
            {description}
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
