const INITIAL_STATE = {
  skills: [
    {
      id: 1,
      name: "HTML",
      skill: 50
    },
    {
      id: 2,
      name: "CSS",
      skill: 45
    },
    {
      id: 3,
      name: "JS",
      skill: 40
    },
    {
      id: 4,
      name: "REACT&REDUX",
      skill: 30
    }
  ]
};

const skillReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillReducer;
