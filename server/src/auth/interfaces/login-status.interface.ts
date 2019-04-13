import { UserDto } from '@user/dto/user.dto';

export interface LoginStatus {
  username: string;
  accessToken: any;
  expiresIn: any;
}
