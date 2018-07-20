const app = "I don't do much.";

const token = "b456b987e0655c443fad36cb4fef690c023125d5";
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
