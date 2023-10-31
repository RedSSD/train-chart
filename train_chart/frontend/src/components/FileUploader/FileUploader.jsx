import React, { useState } from "react";
import axios from "axios";

function FileUploader(){
    const [file, setFile] = useState()

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const url = 'http://localhost:8000/api/fileupload/';
        const formData = new FormData();
        formData.append('excel_file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUploader;