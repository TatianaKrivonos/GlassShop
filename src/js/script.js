import dataProducts from '../js/dataProducts.js';

$(document).ready(function(){
  $('.j-slider').slick();
  $('.aside-content__slider').slick({
    dots: true,
    arrows: false
  });

  $('.product-card__btn').on('click', function(e){
    e.preventDefault();
    $('.bottom-menu__counter span').html(+$('.bottom-menu__counter span').html()+1);
  });
})

const cardsFeatured = document.querySelector('.products__row--featured');
const cardsStaff = document.querySelector('.products__row--staff');
const cardsNew = document.querySelector('.products__row--new');
const dataArr = dataProducts.products;

let labelNew = [];
  dataProducts.products.forEach(function(product){
    if(product.label === 'new') {
      labelNew.push(product);
    }
  });

let staffPick = [];
dataProducts.products.forEach(function(product){
  if(product.label === 'sale') {
    staffPick.push(product);
  }
});

function createCards(data) {
  let cardString = '';
  data.forEach(function(product) {
    cardString = cardString + `<div class="products__col">
                                <article class="product-card ${product.label}">
                                  <img src="img/glass/${product.img}" alt="" class="product-card__img" width="217" height="228">
                                  <div class="product-card__row">
                                    <div class="product-card__info">
                                      <h3 class="product-card__title">${product.name}</h3>
                                      <p class="product-card__price"><span>${product.lastPrice} </span>$${product.price}</p>
                                    </div>
                                    <button class="product-card__btn">
                                      <svg width="24" height="24">
                                        <use xlink:href="img/sprite.svg#supermarket-basket"></use>
                                      </svg>
                                    </button>
                                  </div>
                                </article>
                              </div>`;
  });

  return cardString;
};

function insertElements(data, wrap) {
  const html = createCards(data);
  wrap.innerHTML = html;
};

insertElements(dataArr, cardsFeatured);
insertElements(labelNew, cardsNew);
insertElements(staffPick, cardsStaff);


