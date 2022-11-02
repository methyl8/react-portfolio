import React from "react";

function Project(props) {
    return (
        <>
                <div className="card m-2 border-danger">
                    <img src={props.image} className="card-img-top" style={{ width: "18rem;" }} alt={props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <div className="card-footer">
                        <a href={props.gitlink} target="_blank" rel="noreferrer" className="btn btn-danger">See it on Github</a>
                        <a href={props.livelink} target="_blank" rel="noreferrer" className="btn btn-danger">See it deployed</a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Project;