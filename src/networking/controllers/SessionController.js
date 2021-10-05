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
    TokenService.setUser(response.data);
  }

  static async refreshToken() {
    const refreshToken = TokenService.getLocalRefreshToken();
    // eslint-disable-next-line no-debugger
    const response = await axios.post(generateBackendURL('/auth/refreshtoken'), {
      refreshToken,
    });
    TokenService.updateLocalAccessToken(response.data.accessToken);
    TokenService.updateLocalRefreshToken(response.data.refreshToken);
  }

  static async getUser() {
    const accessToken = TokenService.getLocalAccessToken();
    const response = await axios.get(generateBackendURL('/test/user'), { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(response);
    return response.data;
  }
}

export default SessionController;
