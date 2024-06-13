import React from 'react';
import ReactQuill from 'react-quill';


const Draft = () => {

    const [value, setValue] = React.useState('');
    const [draftTitle, setTitle] = React.useState('')
    const [draftWriter, setWriter] = React.useState('')

    React.useEffect(() => {
        if (localStorage.getItem("draftWriter") !== null) {
            const currentWriter = localStorage.getItem("draftWriter")
            setWriter(currentWriter)
        }
        if (localStorage.getItem("draftTitle") !== null) {
            const currentTitle = localStorage.getItem("draftTitle")
            setTitle(currentTitle)
        }
        if (localStorage.getItem("draft") !== null) {
            const draft = localStorage.getItem("draft")
            setValue(draft)
            console.log(draft)
        }
    }, [])

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            // ['link', 'image'],
            ['clean']
        ],
    }

    const updateDraft = (html) => {
        localStorage.setItem("draft", html)
    }

    const handleChange = (content) => {
        setValue(content)
        updateDraft(content)
    }

    const handleChangeDraftWriter = (arg) => {
        setWriter(arg)
        localStorage.setItem("draftWriter", arg)
    }

    const handleChangeDraftTitle = (arg) => {
        setTitle(arg)
        localStorage.setItem("draftTitle", arg)
    }

    return (
        <>
            <div className='draft'>
                <div className="draft-author-box">
                    <input type="text" className="d-title" value={draftTitle} onChange={e => handleChangeDraftTitle(e.target.value)} placeholder='Заголовок' />
                    <input type="text" className="d-writer" value={draftWriter} onChange={e => handleChangeDraftWriter(e.target.value)} placeholder='Ваше имя' />
                </div>
                <ReactQuill
                    theme='bubble'
                    value={value}
                    onChange={e => handleChange(e)}
                    modules={modules}
                    placeholder={"Как все начиналось..."}
                />
            </div>
            <button onClick={() => console.log(value)}>Show value</button>
        </>
    );
}

export default Draft;
