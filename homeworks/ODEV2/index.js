
const posts = [
    {title: 'Title1', content: 'Example post content', userId: 412},
    {title: 'Title2', content: 'Example post content', userId: 876}, 
];

const listPosts = () => {
    posts.map(post => {
        console.log(post);
    })
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve("New post added successfully");
    })
}

async function showPosts(post) {
    try {
        await addPost(post);
        listPosts();
    } catch (err) {
        console.log(err);
    }
}

let newPost = {title :'Title3', content: 'Example post content', userId: 727};
showPosts(newPost);