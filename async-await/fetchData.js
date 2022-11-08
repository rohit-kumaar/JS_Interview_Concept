const USERS = `https://jsonplaceholder.typicode.com/users`;
const POSTS = `https://jsonplaceholder.typicode.com/posts`;

async function users() {
  try {
    const [users, posts] = await Promise.all([fetch(USERS), fetch(POSTS)]);
    const usersData = await users.json();
    const postsData = await posts.json();
    console.log(usersData);
    console.log(postsData);
  } catch (error) {
    console.log(error);
  }
}

users();
