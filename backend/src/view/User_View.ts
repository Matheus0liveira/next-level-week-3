import User from '../models/User';



export default { 
  render(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  },
};
