import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input} from '@mui/material';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


function App() {
  const [input, setInput] = useState(''); //ReactHook
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // console.log(input);
  // console.log(messages);

  useEffect(()=>{
    //kind of a listener, on updation snapshot works
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(()=>{
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hangout Messages</h1>
      <h2>Welcome {username}</h2>

      <form className='app_form'>
      <FormControl className='app_formControl'>
        <Input className='app_input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>
       {
        //if we don't add the key, it keeps on re-rendering the entire list
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
          // <p>{message}</p>
        ))
       }
      </FlipMove>
    </div>
  );
}

export default App;
