import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true)

        const blogObject = {title, body, author};

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blogObject)
        }).then(()=>{
            setIsPending(false)
            console.log("new blog added")
            //history.go(-1);
            history.push('/');
        } )

    }
    return (
        <div className="create">
            <h2>add blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    value={title}
                    onChange = {(e)=> setTitle(e.target.value)}
                    required/>
                
                <label>Blog body</label>
                <textarea
                    rows="10"
                    value={body}
                    onChange = {(e)=> setBody(e.target.value)}
                    required
                    ></textarea>
                
                <label>Blog author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add</button>}
                { isPending && <button disabled>Adding...</button>}
                
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    );
}

export default Create;