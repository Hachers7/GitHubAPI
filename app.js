const input = document.querySelector("#search");
const submitButton = document.querySelector(".submitButton");
const repos = document.querySelector(".profile-repos");
const description = document.querySelector(".profile-descr");
const fork = document.querySelector(".profile-fork");
const stars = document.querySelector(".profile-stars");
const update = document.querySelector(".profile-update");
const lang = document.querySelector(".profile-lang");

const sortByReposName = document.querySelector(".repos-title");
const sortByStars = document.querySelector(".stars-title");

const client_id = "Iv1.4ccf3fe64e58d69f";
const client_key = "93133e2e3f00830af57c27778601f028a881ae0b";

let repoDown = false;
let repoUp = false;

const findUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}/repos?client_id=${client_id}&client_key=${client_key}`);
    const data = await api_call.json();
    return { data }
};

const showData = () => {
    findUsers(input.value).then((res) => {
        for(let i = 0; i <= res.data.length - 1; i++)
        {
            let date = res.data[i].pushed_at.slice(0, 10);
            repos.innerHTML += `<td class="profile-repos profile-key rows"><div class="cells"><p class="innerText">${res.data[i].name}</p></div></td>`;
            description.innerHTML += `<td class="profile-descr profile-key rows"><div class="cells"><p class="innerText">${res.data[i].description}</p></div></td>`;
            if(res.data[i].fork === true)
            {
                fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">Yes</p></div></td>`;
            }
            else fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">No</p></div></td>`;
            stars.innerHTML += `<td class="profile-stars profile-key rows"><div class="cells"><p class="innerText">${res.data[i].stargazers_count}</p></div></td>`;
            update.innerHTML += `<td class="profile-update profile-key rows"><div class="cells"><p class="innerText">${date}</p></div></td>`;
            lang.innerHTML += `<td class="profile-lang profile-key rows"><div class="cells"><p class="innerText">${res.data[i].language}</p></div></td>`;
        }



        console.log(res);
    });
};

const sortRepo = () =>
{
    findUsers(input.value).then((res) => {
        clearData().then( () => {
            let sortedNames = [];
            let sortedDesc = [];
            let sortedStars = [];
            let sortedFork = [];
            let sortedUpdate = [];
            let sortedLang = [];

            for(let i = 0; i <= res.data.length - 1; i++)
            {
                sortedNames.push(res.data[i].name);
                sortedNames.sort();
            }

            for(let i = 0; i <= sortedNames.length - 1; i++)
            {
                for(let j = 0; j <= res.data.length - 1; j++)
                {
                    if(sortedNames[i] === res.data[j].name)
                    {
                        sortedDesc.push(res.data[j].description);
                        sortedStars.push(res.data[j].stargazers_count);
                        sortedFork.push(res.data[j].fork);
                        sortedUpdate.push(res.data[j].pushed_at.slice(0, 10));
                        sortedLang.push(res.data[j].language);
                    }
                }
            }

            if(repoUp)
            {
                sortedNames.reverse();
                sortedDesc.reverse();
                sortedStars.reverse();
                sortedFork.reverse();
                sortedUpdate.reverse();
                sortedLang.reverse();
            }

            for(let j = 0; j <= sortedNames.length - 1; j++)
            {
                repos.innerHTML += `<td class="profile-repos profile-key rows"><div class="cells"><p class="innerText">${sortedNames[j]}</p></div></td>`;
                description.innerHTML += `<td class="profile-descr profile-key rows"><div class="cells"><p class="innerText">${sortedDesc[j]}</p></div></td>`;
                if(sortedFork[j] = true)
                {
                    fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">Yes</p></div></td>`;
                }
                else fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">No</p></div></td>`;
                stars.innerHTML += `<td class="profile-stars profile-key rows"><div class="cells"><p class="innerText">${sortedStars[j]}</p></div></td>`;
                update.innerHTML += `<td class="profile-update profile-key rows"><div class="cells"><p class="innerText">${sortedUpdate[j]}</p></div></td>`;
                lang.innerHTML += `<td class="profile-lang profile-key rows"><div class="cells"><p class="innerText">${sortedLang[j]}</p></div></td>`;
            }
        });
    });
};

const sortStars = () =>
{
    findUsers(input.value).then((res) => {
        clearData().then( () => {
            let sortedNames = [];
            let sortedDesc = [];
            let sortedStars = [];
            let sortedFork = [];
            let sortedUpdate = [];
            let sortedLang = [];

            for(let i = 0; i <= res.data.length - 1; i++)
            {
                sortedStars.push(res.data[i].stargazers_count);
                sortedStars.sort();
            }

            for(let i = 0; i <= sortedStars.length - 1; i++)
            {
                for(let j = 0; j <= res.data.length - 1; j++)
                {
                    if(sortedStars[i] === res.data[j].stargazers_count)
                    {
                        sortedDesc.push(res.data[j].description);
                        sortedNames.push(res.data[j].name);
                        sortedFork.push(res.data[j].fork);
                        sortedUpdate.push(res.data[j].pushed_at.slice(0, 10));
                        sortedLang.push(res.data[j].language);
                    }
                }
            }

            if(repoUp)
            {
                sortedNames.reverse();
                sortedDesc.reverse();
                sortedStars.reverse();
                sortedFork.reverse();
                sortedUpdate.reverse();
                sortedLang.reverse();
            }

            for(let j = 0; j <= sortedStars.length - 1; j++)
            {
                repos.innerHTML += `<td class="profile-repos profile-key rows"><div class="cells"><p class="innerText">${sortedNames[j]}</p></div></td>`;
                description.innerHTML += `<td class="profile-descr profile-key rows"><div class="cells"><p class="innerText">${sortedDesc[j]}</p></div></td>`;
                if(sortedFork[j] = true)
                {
                    fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">Yes</p></div></td>`;
                }
                else fork.innerHTML += `<td class="profile-fork profile-key rows"><div class="cells"><p class="innerText">No</p></div></td>`;
                stars.innerHTML += `<td class="profile-stars profile-key rows"><div class="cells"><p class="innerText">${sortedStars[j]}</p></div></td>`;
                update.innerHTML += `<td class="profile-update profile-key rows"><div class="cells"><p class="innerText">${sortedUpdate[j]}</p></div></td>`;
                lang.innerHTML += `<td class="profile-lang profile-key rows"><div class="cells"><p class="innerText">${sortedLang[j]}</p></div></td>`;
            }
        });
    });
};

const clearData = async () => {
    repos.innerHTML = `<td class="profile-repos profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
    description.innerHTML = `<td class="profile-descr profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
    fork.innerHTML = `<td class="profile-fork profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
    stars.innerHTML = `<td class="profile-stars profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
    update.innerHTML = `<td class="profile-update profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
    lang.innerHTML = `<td class="profile-lang profile-key rows"><div class="cells" style="border-style: hidden; position: absolute"><p class="innerText"></p></div></td>`;
};

submitButton.addEventListener("click", () => {
    clearData();
    showData();
});

sortByReposName.addEventListener("click", () => {
    document.getElementById('stars').innerHTML = "Stars";
    if(repoDown && !repoUp)
    {
        repoUp = true;
        repoDown = false;
        document.getElementById('rep').innerHTML = "↑ Repository";
        sortRepo();
    }
    else {
        repoDown = true;
        repoUp = false;
        document.getElementById('rep').innerHTML = "↓ Repository";
        sortRepo();
    }
});

sortByStars.addEventListener("click", () => {
    document.getElementById('rep').innerHTML = "Repository";
    if(repoDown && !repoUp)
    {
        repoUp = true;
        repoDown = false;
        document.getElementById('stars').innerHTML = "↑ Stars";
        sortStars();
    }
    else {
        repoDown = true;
        repoUp = false;
        document.getElementById('stars').innerHTML = "↓ Stars";
        sortStars();
    }
});


