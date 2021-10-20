import './App.css';
import React, {useState} from "react";
import {Button} from "react-bootstrap";

const App = () => {

    const [formData, setFormData] = useState([{ title: "", caption : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formData];
        newFormValues[i][e.target.name] = e.target.value;
        setFormData(newFormValues);
        validate(i, newFormValues[i][e.target.name]);
    }

    let validate = (i, data) => {
        let element = document.getElementById(i);
        if (isNaN(data))
            element.parentElement.classList.add("error");
        else
            element.parentElement.classList.remove("error");
    }

    let addControls = () => {
        setFormData([...formData, { title: "", caption: "" }])
    }

    let removeControls = (i) => {
        let newFormValues = [...formData];
        newFormValues.splice(i, 1);
        setFormData(newFormValues)
    }

    let submit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formData));
    }

    return (
        <>
            <div className="wrapper">
                <form className="form-container"  onSubmit={submit}>
                    {formData.map((element, index) => (
                        <div className="form-row" key={index}>
                            <div className="form-group">
                                <input className="form-control" id={index} placeholder="Title" type="text" name="title" value={element.title || ""} onChange={e => handleChange(index, e)} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id={index} placeholder="Caption" type="text" name="caption" value={element.caption || ""} onChange={e => handleChange(index, e)} />
                            </div>
                            <div className="form-group">
                                {
                                    index ?
                                        <Button variant="primary" onClick={() => removeControls(index)}>Remove</Button>
                                        : null
                                }
                            </div>
                        </div>
                    ))}
                    <div className="form-row">
                        <div className="form-group">
                            <Button variant="primary" type="button" onClick={() => addControls()}>Add</Button>
                        </div>
                        <div className="form-group">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
