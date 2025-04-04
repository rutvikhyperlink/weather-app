export const regex = {
  mobile: /^[0-9]{8,15}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
  email: /^[a-z._][a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,5}$/,
  fullName: /^([a-zA-Z]+\s?)*$/,
  state: /^([a-zA-Z]+\s?)*$/,
  number: /^[0-9]*$/,
  username: /^[a-z0-9_.]+$/,
};
