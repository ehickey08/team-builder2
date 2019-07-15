import React, {useState} from 'react';

import TeamMember from './components/TeamMember'
import Form from './components/Form'
import {Tabs, Modal} from 'antd'
import './App.css';
import styled from 'styled-components'

const {TabPane} = Tabs

function App() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [formError, setFormError] = useState('');
    const [memberToEdit, setMemberToEdit] = useState('');
    const [memberIndex, setMemberIndex] = useState(0);
    const [teamNames, setTeamNames] = useState(['Build Week', 'Labs']);
    const [visible, setVisible] = useState(false);
    const [newTeamName, setNewTeamName] = useState('');

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
        let validName = /^([a-z\.]+ ?)+$/i.test(member.name)
        if(!validName && typeof(member.name)==='string'){
            setFormError('Invalid Name')
            return false
        }
        return true
    }

    const addTeamName = (e) => {
        e.preventDefault();
        setTeamNames([...teamNames, newTeamName])
        setVisible(false)
    }
    return (
        <div className="App">
            {formError && <h2>{formError}</h2>}
            <Form 
                add={addTeamMember} 
                edit={editTeamMember} 
                reset={formReset} 
                memberToEdit={memberToEdit}
                teamNames={teamNames}
            />
            <AddTeam onClick={() => setVisible(true)}>Add Another Team</AddTeam>
            <Modal 
                visible={visible}
                title="Add A New Team"
                onOk={(e) => addTeamName(e)}
                onCancel={() => setVisible(false)}
            >
                <form onSubmit={(e) => addTeamName(e)}>
                    <input
                        type="text"
                        value={newTeamName}
                        onChange={(e)=> setNewTeamName(e.target.value)}
                    />
                </form>
            </Modal>
            <Tabs defaultActiveKey="0" style={{width: '500px', margin:'auto'}}>
                {teamNames.map((team, i) => {
                    return (
                        <TabPane tab={team} key={i}>
                            {teamMembers.map(member => {
                                if(member.teamName === team)
                                    return <TeamMember key={member.index} member={member} setEdit={setMemberToEdit}/>
                            })}
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    );
}

export default App;

const AddTeam = styled.button`
    cursor: pointer;
    color: #444444;
    background: #b9e4e3;
    text-shadow: 0px 1px 1px #ffffff;
    border-bottom: 2px solid #b2b2b2;
    width: 150px;
    margin: 5px auto;

    &:hover {
        color: #333333;
        border: 1px solid #a4a4a4;
        border-top: 2px solid #b2b2b2;
        background: #a0dbc4;
    }
`