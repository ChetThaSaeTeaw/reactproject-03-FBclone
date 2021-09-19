import React , { useState , useEffect} from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';
import db from './firebase';


function Feed() {

    const [posts , setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("profilePic","desc").onSnapshot((snapshot) => 
       setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

       
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.messageDB}
                username={post.data.fullname}
                image={post.data.image}
                timestamp={post.data.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed;
