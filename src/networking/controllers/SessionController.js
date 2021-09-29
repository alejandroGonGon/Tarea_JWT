import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async register(username, email, password) {
    const response = await axios.post(generateBackendURL('/auth/signup'), {
      username,
      email,
      password,
    });
    return response;
  }
}

export default SessionController;
