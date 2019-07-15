import React from 'react'

function TeamMember(props) {
    return (
        <div className="teamMember">
            {props.member.name}
            {props.member.email}
            {props.member.role}
            <button onClick={() => props.setEdit(props.member)}>Edit</button>
        </div>
    )
}

export default TeamMember
