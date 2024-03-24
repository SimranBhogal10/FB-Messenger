import { Card, CardContent, Typography } from '@mui/material'
import React, {forwardRef} from 'react'
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
  return (
    //ref={ref} - sort of tightening all of the links, it knows what element is exactly what and what is moving
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography color="text.secondary" variant='h5' component='h2'>
                {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
})

export default Message