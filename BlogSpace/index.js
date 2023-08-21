let postArray = []

function renderPosts() {
    let postHTML = ''
    for (let post of postArray) {
        postHTML += `<h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>`
    }
    document.getElementById('blog-list').innerHTML = postHTML
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    })

document.getElementById('new-post').addEventListener('submit', e => {
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data => {
            postArray.unshift(data)
            renderPosts()
            document.getElementById('post-title').value = ''
            document.getElementById('post-body').value = ''  
        })
})

