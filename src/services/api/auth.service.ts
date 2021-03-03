import { AuthUser, LoginRequest } from '../../models';
import { ApiService } from './api.service';

// 認証サービス
class AuthService extends ApiService {
  // Do Login
  doLogin(request: LoginRequest): Promise<AuthUser> {
    return this.post(AuthUser, `/operators/login`, request);
  }
}

export const authService = new AuthService();
