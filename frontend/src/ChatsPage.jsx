import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'
const ChatsPage=(props)=>{
    const chatProps=useMultiChatLogic(
        '30a58184-7bc0-4c49-8442-6b80fb629215',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height:'100%'}} />
        </div>
    )
}
export default ChatsPage