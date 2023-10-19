import {BsStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const SimilarJobItem = props => {
  const {jobDetails} = props
  console.log(jobDetails)
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails

  return (
    <li className="similar-job-item">
      <div className="logo-title-location-container">
        <div className="title-logo-container">
          <img
            src={companyLogoUrl}
            className="company-logo"
            alt="similar job company logo"
          />
          <div className="title-rating-container">
            <h1 className="title-heading">{title}</h1>
            <div className="rating-container">
              <BsStarFill className="rating-icon" />
              <p className="rating-heading">{rating}</p>
            </div>
          </div>
        </div>
        <h1 className="description-heading">Description</h1>
        <p className="description">{jobDescription}</p>
        <div className="location-employee-type-container">
          <div className="location-container">
            <MdLocationOn className="location-icon" />
            <p className="location-heading">{location}</p>
          </div>
          <div className="employee-type-container">
            <BsFillBriefcaseFill className="brief-case-icon" />
            <p className="employee-type-heading">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem