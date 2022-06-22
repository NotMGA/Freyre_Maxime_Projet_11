import '../../style/Logement-info/index.css'

function Tag(props) {
  return (
    <div className="tags">
      {props.tags.map((tag) => (
        //modif du tag
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
    </div>
  )
}
export default Tag
