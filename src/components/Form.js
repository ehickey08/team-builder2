import React, {useState, useEffect} from 'react'

function Form(props) {
    const [inputValue, setInputValue] = useState({'name': '', 'email': '', 'role': ''});
    
    const submitMember = (e) => {
        e.preventDefault();
        if(props.memberToEdit)
            props.edit(inputValue)
        else
            props.add(inputValue)
        setInputValue({'name': '', 'email': '', 'role': ''})
    }

    useEffect(() => {
        if(props.memberToEdit)
            setInputValue(props.memberToEdit)
    }, [props.memberToEdit]);
    
    const updateEditing = () => {
        setInputValue({'name': '', 'email': '', 'role': ''})
        props.reset()
    }
    return (
        <div className='formContainer'>
            <form onSubmit={(e) => submitMember(e)}>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={inputValue.name}
                        onChange={(e) => setInputValue({...inputValue, 'name': e.target.value})}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={inputValue.email}
                        onChange={(e) => setInputValue({...inputValue, 'email': e.target.value})}
                    />
                </label>
                <label>
                    Role:
                    <select value={inputValue.role} onChange={(e) => setInputValue({...inputValue, 'role': e.target.value})}> 
                        <option value='UX Designer'>UX Designer</option>
                        <option value='UI Developer'>UI Developer</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                    </select>
                    <input 
                        type="submit"
                        onSubmit={(e) => submitMember(e)}
                    />
                    <input 
                        type="reset"
                        onClick={updateEditing}
                    />
                </label>
            </form>
        </div>
    )
}

export default Form
