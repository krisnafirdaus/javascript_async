const getDataGithub = async () => {
  try {
    let response = await fetch("https://api.github.com/users/saiakrisna");
    let data = await response.json();

    console.log("data Krisna", data);

    document.getElementsByClassName("login")[0].innerHTML = `${data.login}`;
    document.getElementsByClassName("short-bio")[0].innerHTML = `${data.bio}`;
    document.getElementsByClassName("ava")[0].src = data.avatar_url;
    document.getElementsByClassName("urlGit")[0].innerHTML = `${data.html_url}`;
    document.getElementsByClassName("id")[0].innerHTML = `${data.id}`;
    document.getElementsByClassName("rep")[0].innerHTML = `${data.updated_at}`;
  } catch {
    console.log("error 69");
  }
};
getDataGithub();
console.log(data);
