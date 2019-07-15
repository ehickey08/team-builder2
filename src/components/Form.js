import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function Form(props) {
    const [inputValue, setInputValue] = useState({'name': '', 'email': '', 'role': 'UX Designer', 'teamName': 'Build Week'});
    
    const submitMember = (e) => {
        e.preventDefault();
        if(props.memberToEdit)
            props.edit(inputValue)
        else
            props.add(inputValue)
        setInputValue({'name': '', 'email': '', 'role': 'UX Designer', 'teamName': 'Build Week'})
    }

    useEffect(() => {
        if(props.memberToEdit)
            setInputValue(props.memberToEdit)
    }, [props.memberToEdit]);
    
    const updateEditing = () => {
        setInputValue({'name': '', 'email': '', 'role': 'UX Designer', 'teamName': 'Build Week'})
        props.reset()
    }
    return (
        <FormContainer>
            <form onSubmit={(e) => submitMember(e)}>
                <div>
                    <label> Name: </label>
                    <input 
                        type="text"
                        value={inputValue.name}
                        onChange={(e) => setInputValue({...inputValue, 'name': e.target.value})}
                    />
                </div>
                <div>
                    <label> Email: </label>
                    <input 
                        type="text"
                        value={inputValue.email}
                        onChange={(e) => setInputValue({...inputValue, 'email': e.target.value})}
                    />
                </div>
                <div>
                    <label> Role:</label>
                    <select value={inputValue.role} onChange={(e) => setInputValue({...inputValue, 'role': e.target.value})}> 
                        <option value='UX Designer'>UX Designer</option>
                        <option value='UI Developer'>UI Developer</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                    </select>
                </div>
                <div>
                    <label> Team Name:</label>
                    <select value={inputValue.teamName} onChange={(e) => setInputValue({...inputValue, 'teamName': e.target.value})}> 
                        {props.teamNames.map(teamName=> <option key={teamName} value={teamName}>{teamName}</option>)}
                    </select>
                </div>
                <div className="buttons">
                <input
                    className="formButton" 
                    type="submit"
                    onSubmit={(e) => submitMember(e)}
                />
                <input 
                    className="formButton"
                    type="reset"
                    onClick={updateEditing}
                />
                </div>
            </form>
        </FormContainer>
    )
}

export default Form

const FormContainer = styled.div`
    form{
        display: flex;
        flex-direction: column;
        div{
            border-bottom: 1px solid #efefef;
            margin: 20px auto;
            padding-bottom: 10px;
            width: 300px;
        }
        label{
            float: left;
            width: 100px;
            text-align: right;
            padding-right: 10px;
        }
        input{
            border: 1px solid #bdbdbd;
            background: #f2f2f2;
            border-radius: 5px;
            padding: 5px;
            background-position: 8px 9px;
            margin-bottom: 10px;
            width: 175px;
            &:focus{
                background-color: #ffffff;
                border: 1px solid #b1e1e4;
                outline: none;
            }
        }

        select{
            border: 1px solid #bdbdbd;
            background: #f2f2f2;
            border-radius: 5px;
            padding: 5px;
            background-position: 8px 9px;
            margin-bottom: 10px;
            width: 175px;
            &:focus{
                background-color: #ffffff;
                border: 1px solid #b1e1e4;
                outline: none;
            }
        }

         .formButton{
            cursor: pointer;
            color: #444444;
            background: #b9e4e3;
            text-shadow: 0px 1px 1px #ffffff;
            border-bottom: 2px solid #b2b2b2;
            width: 80px;
            margin: 5px auto;

            &:hover {
                color: #333333;
                border: 1px solid #a4a4a4;
                border-top: 2px solid #b2b2b2;
                background: #a0dbc4;
            }
        }

        .buttons{
            display: flex;
            flex-direction: column;
        }
    }
`