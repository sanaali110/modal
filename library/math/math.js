const math = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute: (num) => {
    if (num < 0) return num * -1;
    return num;
  },
};

export default math;
