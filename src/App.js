import React, {useState} from 'react';

import TeamMember from './components/TeamMember'
import Form from './components/Form'

import './App.css';
import { validate } from '@babel/types';

function App() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [formError, setFormError] = useState('');
    const [memberToEdit, setMemberToEdit] = useState('');
    const [memberIndex, setMemberIndex] = useState(0);

    const addTeamMember = (member) => {
        setFormError('')
        let valid = validate(member)
        if(valid){
            setTeamMembers([...teamMembers, {...member, index: memberIndex}])
            setMemberIndex(memberIndex+1)
        }
    }

    const editTeamMember = (editMember) => {
        setFormError('')
        let valid = validate(editMember)
        if(valid){
            setTeamMembers([...teamMembers.map(member => {
                if(member.index === editMember.index)
                    return editMember
                else
                    return member
            })])
        }
        setMemberToEdit('')
    }

    const formReset = () => {
        setMemberToEdit('')
    }

    const validate = (member) => {
        let validEmail = /^[^@]+@[^@]+\.[^@\.]+$/.test(member.email)
        if(!validEmail && typeof(member.email) === 'string'){
            setFormError('Invalid Email')
            return false
        }
        let validName = /^[a-z]+ ?[a-z]+$/i.test(member.name)
        if(!validName && typeof(member.name)==='string'){
            setFormError('Invalid Name')
            return false
        }
        return true
    }
    return (
        <div className="App">
            <Form add={addTeamMember} edit={editTeamMember} reset={formReset} memberToEdit={memberToEdit}/>
            {formError && <h3>{formError}</h3>}
            {teamMembers.map(member => <TeamMember key={member.index} member={member} setEdit={setMemberToEdit}/>)}
        </div>
    );
}

export default App;
