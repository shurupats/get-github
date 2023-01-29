

function displayProjectList()
{
    let projects = getProjectList();

    let pageContent = ``;

    /*for (let project of projects){
        pageContent += `<div class="container-hero">
        <div class="container-hero-img">
          <img src="${hero.img}" class="container-hero-img__img">
        </div>
        <h3 class="container-hero__name">${hero.name}</h3>
        <p class="container-hero__universe">${hero.universe}</p>
        <p class="container-hero__alter"${hero.alterEgo}></p>
        <p class="container-hero__job">${hero.job}</p>
        <p class="container-hero__friends">${hero.friends}</p>
        <p class="container-hero__superpowers">${hero.superpowers}</p>
        <p class="container-hero__info">${hero.information}</p>
      </div>`;
    }*/

    document.querySelector('.container').innerHTML = pageContent;

}

function getProjectList(){
  let projects;
  fetch('https://api.github.com/users/shurupats')
      .then(response => response.json())
			.then(data => projects = data)
      .catch(error => console.log(error));

  return projects;
}




document.addEventListener("DOMContentLoaded", displayProjectList);
