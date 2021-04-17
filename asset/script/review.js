const reviews = [
  {
    name: "Steve J.",
    job: "Lawyer",
    image: "/asset/images/lawyer.jpg",
    content: `
        I've used Standfit Sports for almost two years now. It had the best 
        product knowledge, best products, best services and best price. The treadmill I bought fits my needs perfectly. Standfit was great!
       `,
  },
  {
    name: "Williams K.",
    job: "I.T Consultant",
    image: "/asset/images/it.jpg",
    content: `
        Years ago we had a wonderful gym in our home but when we downsized we didn't want to take up space until the pandemic was upon us. 
        Now we're not interested in a gym and the STANDFIT Sports seemed perfect and it is.
      `,
  },
  {
    name: "Pius C.",
    job: "I.T Consultant",
    image: "/asset/images/estate.jpg",
    content: `
        working from home as a result of the Covid-19 pandemic have really made me add some weights...through recommendation from a colleague about Standfit
        Sports, i've got my body back on track from 'Fat' to 'Fit'... It's been an amazing experience and I couldn't recommend StandFit Sports more, its simply the best!
      `,
  },
  {
    name: "Stella M.",
    job: "Doctor",
    image: "/asset/images/doctor.jpg",
    content: `
        
        I've lost about 6lbs within two weeks! I feel more energetic and seeing my flatter tummy just leaves my loving my body the more...
        My husband became interested and he's lost 10lbs already. Thanks to Standfit sports for helping me choose the fitness equipment that is right for me.
                    
      `,
  },
  {
    name: "Ella T.",
    job: "Model",
    image: "/asset/images/model.jpg",
    content: `
        
        I placed an order for a Wondercore Ab fitness machine on Thursday morning and by afternoon same day the product is already at my door.
        You read it right,my order was delivered to my house the same day.Wow! that's fast, really fast service.I'm please to do business with STANDFIT Sports. 
       Thanks again for the payment on delivery,it really makes life much easier.
                   
      `,
  },
];

let currentReview = 0;
const author = document.querySelector(".name");
const post = document.querySelector(".post");
const image = document.querySelector(".image");
reviewText = document.querySelector(".desc");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    currentReview++;
    getReview(currentReview);
    if (currentReview === reviews.length - 1) {
      currentReview = 0;
    }
  }, 5000);
});

function getReview(index){
    const review = reviews[index];
    author.textContent = review.name;
    post.textContent = review.job;
    image.src = review.image;
    reviewText.textContent = review.content;
}
