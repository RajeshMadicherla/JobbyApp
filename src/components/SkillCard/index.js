import './index.css'

const SkillCard = props => {
  const {skill} = props
  const {imageUrl, name} = skill

  return (
    <li className="skills-list-container">
      <div className="skill-container">
        <img src={imageUrl} alt={name} className="skill-img" />
        <p className="skill">{name}</p>
      </div>
    </li>
  )
}

export default SkillCard
