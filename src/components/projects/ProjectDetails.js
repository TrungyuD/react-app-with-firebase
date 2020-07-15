import React from 'react'

const ProjectDetails = (props) => {
    const {id} = props.match.params;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem ipsum</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by NTD</div>
                    <div>15th July, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

