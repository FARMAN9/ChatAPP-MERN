import React from 'react'
import  {useAuth}  from './authprovider'
import { io } from 'socket.io-client'
const socketContext = React.createContext()

export const useSocketContext = () => {
    return React.useContext(socketContext)
}


export const SocketProvider = ({children}) => {

    const [socket, setSocket] = React.useState(null)
    const [authUser] = useAuth();
    const [onlineUsers, setOnlineUsers] = React.useState([])

    React.useEffect(() => {
        if(authUser){
            const socket= io("http://localhost:3000", {query:{
                userId: authUser.user.id
        }})
          setSocket(socket) 
          socket.on("GetOnlineUser", (users) => {
              console.log(users);
              setOnlineUsers(users)
          })
          return () => socket.close();
        }
        else{
            if(socket){
                socket.close()
                setSocket(null)
            }
            
        }
    }, [authUser])
    return (
        <socketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
}