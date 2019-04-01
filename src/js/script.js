import dataProducts from '../js/dataProducts.js';

$(document).ready(function(){
  $('.j-slider').slick();
  $('.aside-content__slider').slick({
    dots: true,
    arrows: false
  });
})

const cards = document.querySelector('.products__row');

function createCards(dataProducts) {
  const dataArr = dataProducts.products;
  let cardString = '';
  dataArr.forEach(function(product){
    cardString = cardString + `<div class="products__col">
                                <article class="product-card">
                                  <img src="img/glasses/${product.img}" alt="" class="product-card__img" width="217" height="228">
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
}

function insertElements(dataProducts, wrap) {
        const html = createCards(dataProducts);
        wrap.innerHTML = html;
}

insertElements(dataProducts, cards);



