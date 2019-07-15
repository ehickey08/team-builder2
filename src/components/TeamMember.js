import React from 'react'
import styled from 'styled-components'
function TeamMember(props) {
    return (
        <MemberContainer>
            <div><h3>Name: </h3><span>{props.member.name}</span></div>
            <div><h5>Email: </h5><span>{props.member.email}</span></div>
            <div><h5>Role: </h5><span>{props.member.role}</span></div>
            <button onClick={() => props.setEdit(props.member)}>Edit</button>
        </MemberContainer>
    )
}

export default TeamMember

const MemberContainer = styled.div`
    display: flex;
    flex-direction: column;

    div{
        width: 300px;
        margin: 10px auto;
        padding-bottom: 5px;
        h3{
            display: inline;
            float: left;
            width: 100px;
            text-align: right;
            margin: 0;
        }
        h5{
            display: inline;
            width: 100px;
            float: left;
            text-align: right;
            margin: 0;
            height: 25px;
            line-height: 25px;
        }
        span{
            height: 25px;
            line-height: 25px;
        }
    }
    button{
        cursor: pointer;
            color: #444444;
            background: #b9e4e3;
            text-shadow: 0px 1px 1px #ffffff;
            border-bottom: 2px solid #b2b2b2;
            width: 80px;
            margin: 5px auto;
            border-radius: 5px;
            padding: 5px;

        &:hover {
            color: #333333;
            border: 1px solid #a4a4a4;
            border-top: 2px solid #b2b2b2;
            background: #a0dbc4;
        }
    }
`