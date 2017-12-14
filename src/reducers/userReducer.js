import { FETCH_USER, UPDATE_USER } from '../actions/types';
const user = [
  {
    first_name: 'arslan',
    last_name: 'shakoor',
    email: 'arslantechielive@gmail.com',
    title: 'Frontend Developer(React.js)',
    description:
      'Passionate Frontend Developer and I believe that a programming language is just a syntax, and if you are good at the basic concepts, you can switch to any language or framework.I dream javascript having experience in ReactJS/React Native/NodeJS/ROR.'
  }
];

export default function(state = { user }, action) {
  switch (action.type) {
    case FETCH_USER:
      return state.user;
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
}
