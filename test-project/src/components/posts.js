const Posts = (e,postsOfUser) => {
     console.log(postsOfUser)
     return(
          <div key={e.id} className="title">{e.name}
                        <div className="body">{e.username}</div>
                        <button onClick={ () => postsOfUser(e.id)}>add</button>
                        </div>
     )
}

export default Posts