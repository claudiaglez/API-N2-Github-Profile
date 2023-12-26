const APIURL = 'https://api.github.com/users/'
const usersContainer = document.getElementById('main');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    let user = document.getElementById("search").value;

    axios.get(APIURL + user)
         .then(response =>{
             const data = response.data;
             console.log(data);
 
             let profile = document.createElement("div");
             profile.classList.add('card');
             main.appendChild(profile);
 
             let userImg = document.createElement("img");
             userImg.src = data.avatar_url;
             userImg.classList.add('avatar');
             profile.appendChild(userImg);
                 
             
             axios.get(data.repos_url)
                 .then(response =>{
                     const repoData = response.data;
 
                     let list = document.createElement("ul");
                     list.classList.add('user-info');
                     profile.appendChild(list);
                     
 
                     repoData.forEach((repo) => {
                         let listItem = document.createElement("ul");
                         listItem.textContent = repo.name;
                         listItem.classList.add('repo');
                         list.appendChild(listItem);   
                     });                     
                 })
             
             let profileData = document.createElement("div");
             profileData.classList.add('user-info');
             profile.appendChild(profileData);
             
             let nameProfile = document.createElement("h2");
             nameProfile.textContent = data.name;
             nameProfile.classList.add('user-info');
             profileData.appendChild(nameProfile);
 
             let infoProfile = document.createElement("h5");
             infoProfile.textContent = data.bio;
             infoProfile.classList.add('user-info');
             profileData.appendChild(infoProfile);  
             
             let listFollow = document.createElement("ul");
             listFollow.classList.add('user-info');
             profileData.appendChild(listFollow);

            let itemFollowers = document.createElement("li");
            itemFollowers.textContent = `${data.followers} Followers`;
            itemFollowers.classList.add('user-info');
            listFollow.appendChild(itemFollowers);

            itemFollowing = document.createElement("li");
            itemFollowing.textContent = `${data.following} Following`;
            itemFollowing.classList.add('user-info');
            listFollow.appendChild(itemFollowing);

            itemRepos = document.createElement("div");
            itemRepos.textContent = `${data.public_repos} Repositories`;
            itemRepos.classList.add('user-info');
            listFollow.appendChild(itemRepos);
         })
         .catch((error) =>{
             console.log(error);
             message = document.createElement("h2");
             message.classList.add('user-info');
             message.textContent = "No profile with this username";
             profile = document.createElement("div");
             profile.classList.add('card');
             profile.appendChild(message);
             main.appendChild(profile);
             
         });
 });
 
 


function getUser() {
    axios.get("https://api.github.com/users/")
    .then((response) =>{
        const users = response
        console.log(users);
    })
}

getUser();