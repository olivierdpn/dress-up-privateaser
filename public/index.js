/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();

    const div = document.createElement('div');
    var template = `
    <div class="card-group">
    `;
    template += actors.map(actor => {
      if(actor.type == "credit")
      return `
        <div class="card border-success text-center">
        <div class="card-body text-success">
        <h5 class="card-title">${actor.who}</h5>
        <p class="card-text">${actor.amount} €</p>
        </div>
        </div>
      `;
      else 
        return`
        <div class="card text-center border-danger">
        <div class="card-body text-danger">
        <h5 class="card-title">${actor.who}</h5>
        <p class="card-text">${actor.amount} €</p>
        </div>
        </div>
      `;
    }).join('');
    template += `
    </div>
    `;
    div.innerHTML = template;

    fragment.appendChild(div);

 

    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };




  const button = document.querySelector('#compute');




  button.addEventListener('click', function onClick () {
    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.js-time').value;
    const persons = document.querySelector('.js-persons').value;
    const option = document.querySelector('.js-option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

   document.getElementById("compute").value = "↓ Your quote below ↓ (click to ask a new quote !)";

    render(actors);

    return;
  });
})();
