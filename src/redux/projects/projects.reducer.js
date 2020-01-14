const INITIAL_STATE = {
  project: [
    {
      id: 1,
      name: "react&redux",
      img: "https://i.ibb.co/nM6SGrg/Untitled-2.jpg",
      url: "https://ecommerce-shop.netlify.com/"
    },
    {
      id: 2,
      name: "Weather API",
      img: "https://i.ibb.co/zbM8qdg/Untitled-3.jpg"
    },
    {
      id: 3,
      name: "grid responsive",
      img: "https://i.ibb.co/gZpK0nG/Untitled-1.jpg",
      url: "https://slapped-headphones.netlify.com/"
    },
    {
      id: 4,
      name: "piano simple",
      img: "https://i.ibb.co/TPxTN37/Untitled-4.jpg",
      url: "https://piano-simple.netlify.com"
    },
    {
      id: 5,
      name: "flex responsive",
      img: "https://i.ibb.co/KmRnNjG/Untitled-5.jpg",
      url: "https://flex-res.netlify.com"
    }
  ]
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
