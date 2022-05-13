import { Travel } from 'src/app/modules/travel';
export class User {

  	 user_id!: number;
	 user_firstName!: string;
	 user_lastName!: string;
	 user_email!: string; 
	 user_password !: string; 
	travels!: Travel[] ; 
}
