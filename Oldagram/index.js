const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const avatarEl = document.getElementById("avatar")
const nombreEl = document.getElementById("name")
const locationEl = document.getElementById("location")
const postImgEl = document.getElementById("post-img")
const likesEl = document.getElementById("likes")
const usernameEl = document.getElementById("username")
const commentEl = document.getElementById("comentario")
let index = 0

loadPost()

function loadPost() {
    avatarEl.src = posts[index].avatar
    nombreEl.textContent = posts[index].name
    locationEl.textContent = posts[index].location
    postImgEl.src = posts[index].post
    likesEl.textContent = posts[index].likes + " likes"
    usernameEl.textContent = posts[index].username
    commentEl.textContent = posts[index].comment
}

postImgEl.addEventListener("click", function() {
    if (index === posts.length - 1) {
        index = 0
    } else {
        index += 1
    }
    console.log(index)
    loadPost()
})