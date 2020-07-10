//  updating the room
class Chatroom{
    constructor(room, username){
        this.room =room;
        this.username = username;
        this.chats = db.collection('chats'); 
        this.unsub;
    }
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat ={
            message,
            username: this.username,
            room: this.room,
            createdAt: firebase.firestore.Timestamp.fromDate(now)
        };

        // save the chat to db
        const response = await this.chats.add(chat);
        return response;
    }

    // make a real time listener
    getChats(callback){
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('createdAt')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added'){
                    // update the UI
                    callback(change.doc.data());
                }
            });
        });
    }

    // update username
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}