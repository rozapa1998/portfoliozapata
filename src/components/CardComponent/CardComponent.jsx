
const CardComponent = ({img, title , description}) => {
  return (
    <div className='containerCard'>
        <div className="box">
            <div className="imgBox">
                <img src={img} alt="Loading..."/>
            </div>
            <div className="content">
                <h2>{title} <br/><span>  </span>
                <span>{description}</span></h2>
            </div>
        </div>
        </div>
  )
}

export default CardComponent