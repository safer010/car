//change color of car and add to cart button when a color is selected 
// slected elements are red blue yellow black

let red = document.querySelector (".red");
let blue = document.querySelector (".blue");
let yellow = document.querySelector (".yellow");
let black = document.querySelector (".black");
let btn = document.querySelector ("#button");
let carImage = document.querySelector (".product-image");
let car = document.querySelector (".car");

let m = document.querySelector ("#message")
let cart = document.querySelector (".btn-text");

red.addEventListener("click",function()
                                    {
                                        car.style.backgroundColor = "red";
                                        btn.style.backgroundColor = "red";
                                        carImage.style.backgroundImage = "url(img/img1.jpg)"

                                    });

blue.addEventListener("click",function()
                                    {
                                        car.style.backgroundColor = "blue";
                                        btn.style.backgroundColor = "blue";
                                        carImage.style.backgroundImage = "url(img/img4.jpg)"
                                    });
                                    
yellow.addEventListener("click",function()
                                    {
                                        car.style.backgroundColor = "gold";
                                        btn.style.backgroundColor = "gold";
                                        carImage.style.backgroundImage = "url(img/img2.jpg)"
                                    });

black.addEventListener("click",function()
                                    {
                                        car.style.backgroundColor = "black";
                                        btn.style.backgroundColor = "black";
                                        carImage.style.backgroundImage = "url(img/img3.jpg)"
                                    });

cart.addEventListener("click",function()
                                     {
                                        let p = document.createElement ("p");
                                        p.style.backgroundColor ="white";
                                        p.textContent =  "🥳 Woohoo, You're about to own a Porche 911 GT3";
                                        m.appendChild(p);
                                     });
                                    
